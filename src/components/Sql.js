import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { SQLCard } from "./SqlCard";
import analysis1 from "../assets/img/analysis1.png"
import analysis2_1 from "../assets/img/analysis2-1.png"
import analysis2_2 from "../assets/img/analysis2-2.png"
import analysis2_3 from "../assets/img/analysis2-3.png"
import analysis2_4 from "../assets/img/analysis2-4.png"
import analysis3 from "../assets/img/analysis3.png"
import analysis4_1 from "../assets/img/analysis4-1.png"
import analysis4_2 from "../assets/img/analysis4-2.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const SQL = () => {

  const projects = [
    {
      title: "Category Overview",
      description: "Total Sub Categories",
      imgUrl: analysis1,
    },
    {
      title: "Top Trending Products",
      description: "Company Wise",
      imgUrl: analysis2_1,
    },
    {
      title: "Top Trending Products",
      description: "Sub Category Wise",
      imgUrl: analysis2_2,
    },
    {
      title: "Top Trending Products",
      description: "Ratings not -1",
      imgUrl: analysis2_3,
    },
    {
      title: "Top Trending Products",
      description: "Main Category Wise",
      imgUrl: analysis2_4,
    },
    {
      title: "High-Rated Products",
      description: "Company Wise",
      imgUrl: analysis3,
    },
    {
      title: "Discounted Products",
      description: "High Discounted",
      imgUrl: analysis4_1,
    },
    {
      title: "Discounted Products",
      description: "Low Discounted",
      imgUrl: analysis4_2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>SQL</h2>
                  <p>
                    This title encapsulates the comprehensive nature of the SQL queries used to analyze an e-commerce product database, focusing on insights, trends, and categorization based on various metrics such as ratings, discounts, and product categories.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Analysis 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Analysis 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Analysis 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Analysis 4</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            <SQLCard
                              title={projects[0].title}
                              description={projects[0].description}
                              imgUrl={projects[0].imgUrl}
                            />
                          }
                          <Col xs={12}>
                            <p>This query retrieves various insights about product categories, including:

                              Total sub-categories
                              Sum and average of actual product prices
                              Total number of companies and products
                              Average rating, number of ratings, and discount percentage per category
                              It sorts the results by average rating in descending order and retrieves the top category.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(1, 5).map((project, index) => (
                            <SQLCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                            />
                          ))}
                        </Row>

                        <p><h2>This query identifies trending products in three ways</h2>
                          <br></br>
                          <h3><b>Company-wise:</b></h3> It finds products with the highest ratings and number of ratings for each company and sub-category.<br></br>
                          <h3><b>Sub-Category-wise:</b></h3> It finds sub-categories with the highest average rating and total number of ratings.<br></br>
                          <h3><b>Main-Category-wise:</b></h3> It finds main-categories with the highest average rating and total number of ratings.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            <SQLCard
                              title={projects[5].title}
                              description={projects[5].description}
                              imgUrl={projects[5].imgUrl}
                            />
                          }
                          <p>This query calculates the following for each company:

                            Maximum product rating
                            Total number of products offered
                            Total number of ratings received
                            It retrieves the top 5 companies based on the total number of ratings.
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {projects.slice(6, 8).map((project, index) => (
                            <SQLCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                            />
                          ))}
                        </Row>

                        <p><h2>This query categorizes products based on their discount percentages</h2>
                          <br></br>
                          <h3><b>Below category average discount
                          </b></h3> It Represents the products within the category which are having lower discount percentage then average discount percentage of category respectively.<br></br>
                          <h3><b>Above category average discount
                          </b></h3> It Represents the products within the category which are having higher discount percentage then average discount percentage of category respectively<br></br>
                          <h3><b>Count of Products</b></h3> It represents the unique products within a category
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}