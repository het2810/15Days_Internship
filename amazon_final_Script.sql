CREATE TABLE amazon_final(
	product_name varchar(400),
	main_category varchar(300),
	sub_category varchar(300),
	ratings float,
	no_of_ratings float,
	discount_price float,
	actual_price float,
	company varchar(200)
);
COPY amazon_final
FROM 'C:\Users\91915\OneDrive\Desktop\Datasets\SQL_EXCEL\\amazon_final.csv' 
HEADER CSV
DELIMITER ',';

