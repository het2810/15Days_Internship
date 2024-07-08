
---------- 1 Total Category sum of actual price,count of company,avg rating,avg no of rating,count of sub-category,avg discount perc,avg price

SELECT main_category,
	   COUNT(DISTINCT sub_category) AS total_sub_categories,
       SUM(actual_price) AS sum_actual_price,
       ROUND(AVG(actual_price::numeric), 2) AS avg_actual_price,
       COUNT(DISTINCT company) AS total_companies,
	   COUNT(DISTINCT product_name) AS total_products,
       ROUND(AVG(ratings::numeric), 2) AS avg_ratings,
       ROUND(AVG(no_of_ratings::numeric), 2) AS avg_no_of_ratings,
       ROUND(AVG(discount_percentage::numeric), 2) AS avg_discount_percentage
FROM amazon_final
where ratings != -1
GROUP BY main_category
order by avg_ratings DESC limit 1;

---------------------- 2 Best Trending products
-- company wise
WITH RankedCompanies AS (
    SELECT
        main_category,
        sub_category,
        company,
        ratings,
        no_of_ratings,
        RANK() OVER (PARTITION BY main_category, sub_category ORDER BY ratings DESC, no_of_ratings DESC) AS rating_rank
    FROM
        amazon_final
)
SELECT
    main_category,
    sub_category,
    company,
    ratings,
    no_of_ratings
FROM
    RankedCompanies
WHERE
    rating_rank = 1;
	
-- sub category wise

WITH RankedSubCategories AS (
    SELECT
        main_category,
        sub_category,
        AVG(ratings) AS avg_rating, 
        count(no_of_ratings) AS total_no_of_ratings,
        RANK() OVER (PARTITION BY main_category ORDER BY AVG(ratings) DESC, SUM(no_of_ratings) DESC) AS sub_category_rank
    FROM
        amazon_final
    GROUP BY
        main_category,
        sub_category
)
SELECT
    main_category,
    sub_category,
    avg_rating,
    total_no_of_ratings
FROM
    RankedSubCategories
WHERE
    sub_category_rank = 1;
	
--------------	
SELECT company,
       MAX(ratings) AS max_rating,
       COUNT(DISTINCT product_name) AS total_products,
	   COUNT(no_of_ratings) AS total_no_of_ratings
FROM amazon_final
where no_of_ratings > 0
GROUP BY company
ORDER BY total_no_of_ratings DESC
LIMIT 5;

--------------
SELECT main_category,
	   company,
       MAX(ratings) AS max_rating,
       COUNT(DISTINCT product_name) AS total_products,
	   COUNT(no_of_ratings) AS total_no_of_ratings
FROM amazon_final
where no_of_ratings > 0
GROUP BY main_category,company
ORDER BY total_no_of_ratings DESC
LIMIT 5;

------------------------- 3 Total products category wise
WITH CTE AS(
	SELECT 
		CASE WHEN (ratings >= 0 and ratings <=3) THEN 'LOW_RATED_PRODUCTS'
			 WHEN (ratings > 3) THEN 'HIGH_RATED_PRODUCTS' 
			 WHEN (ratings = -1) THEN 'NOT_RATED'
 			 ELSE NULL END AS HIGH_LOW,
		company
		FROM amazon_final
)select company,count(HIGH_LOW) from CTE where high_low = 'HIGH_RATED_PRODUCTS' group by company order by 2 DESC;

ALTER TABLE amazon_final
ADD COLUMN HIGH_LOW VARCHAR(20);

UPDATE amazon_final
SET HIGH_LOW = CASE 
                   WHEN ratings >= 0 AND ratings <= 3 THEN 'LOW_RATED_PRODUCT'
                   WHEN ratings > 3 THEN 'HIGH_RATED_PRODUCT'
				   WHEN ratings = -1 THEN 'NOT_RATED'
                   ELSE NULL END;
				   
SELECT 
    main_category,
    COUNT(*) FILTER (WHERE HIGH_LOW = 'NOT_RATED') AS NOT_RATED_PRODUCTS,
	COUNT(*) FILTER (WHERE HIGH_LOW = 'HIGH_RATED_PRODUCT') AS High_RATED_PRODUCTS,
	COUNT(*) FILTER (WHERE HIGH_LOW = 'LOW_RATED_PRODUCT') AS Low_RATED_PRODUCTS,
    COUNT(*) AS TOTAL_PRODUCTS
FROM 
    amazon_final
GROUP BY 
    main_category;
	
--------- 4 TOP n Max/Min discounted products

with cte as(
		select main_category,
			   AVG(discount_percentage) AVG_DISCOUNT_PERCENTAGE
	    from amazon_final
		group by main_category
)
select af.main_category,
	   c.AVG_DISCOUNT_PERCENTAGE,
	   count(CASE
			     WHEN af.discount_percentage < c.AVG_DISCOUNT_PERCENTAGE THEN 1 END) AS PRODUCT_COUNT_LOW,
	   count(CASE
			     WHEN af.discount_percentage > c.AVG_DISCOUNT_PERCENTAGE THEN 1 END) AS PRODUCT_COUNT_HIGH
from amazon_final af
join cte c
		   ON af.main_category = c.main_category
		   group by 
		   af.main_category,c.AVG_DISCOUNT_PERCENTAGE
		   

WITH cte AS (
    SELECT 
        main_category,
		sub_category,
        AVG(discount_percentage) AS avg_discount_percentage
    FROM 
        amazon_final
    GROUP BY 
        main_category,
		sub_category
)
SELECT 
    af.main_category,
    af.sub_category,
    c.avg_discount_percentage,
    COUNT(CASE WHEN af.discount_percentage < c.avg_discount_percentage THEN 1 END) AS product_count_low,
    COUNT(CASE WHEN af.discount_percentage > c.avg_discount_percentage THEN 1 END) AS product_count_high
FROM 
    amazon_final af
JOIN 
    cte c ON af.main_category = c.main_category and af.sub_category = c.sub_category
GROUP BY 
    af.main_category, 
    af.sub_category, 
    c.avg_discount_percentage
ORDER BY 
    af.main_category,
    af.sub_category;



	
