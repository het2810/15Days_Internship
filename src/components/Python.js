import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PythonCard } from "./PythonCard";
import code1 from "../assets/img/code1.png";
import code2 from "../assets/img/code2.png";
import code3 from "../assets/img/code3.png";
import code4 from "../assets/img/code4.jpeg";
import code5 from "../assets/img/code5.jpeg";
import code6 from "../assets/img/code6.jpeg";
import code7 from "../assets/img/code7.jpeg";
import code8 from "../assets/img/code7.jpeg";
import code9 from "../assets/img/code8.jpeg";
import code10 from "../assets/img/code9.jpeg";
import code11 from "../assets/img/code10.jpeg";
import code13 from "../assets/img/code12.jpeg";
import code14 from "../assets/img/code13.jpeg";
import code15 from "../assets/img/code15.jpeg";
import code16 from "../assets/img/code16.jpeg";
import code17 from "../assets/img/code17.jpeg";
import code18 from "../assets/img/code18.jpeg";
import code19 from "../assets/img/code19.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Python = () => {

  const projects = [
    //Parshwa

    {
      title: "Discount Analysis",
      description: "Category-based",
      imgUrl: code15,
      data:"Understanding overall discount trends can help in pricing strategy and promotional planning.Comparing individual product discounts to these global metrics can identify outliers or special offers."
    },{
      title: "Main Category",
      description: "Main Category based discount analysis",
      imgUrl: code16,
      data:"Analyzing discounts by category can reveal which product types are more heavily discounted.This information can be used for targeted marketing or to identify categories that might benefit from promotional adjustments"
    },{
      title: "High Rated Products",
      description: "Sub-Category wise",
      imgUrl: code17,
      data:"This analysis helps identify category leaders and potential benchmark products.It could be useful for competitor analysis or identifying successful product characteristics."
    },{
      title: "Top 10 Rated Products",
      description: "Ratings Wise",
      imgUrl: code18,
      data:"This can help identify leading companies in different product segments.It could be useful for brand performance analysis or identifying potential partnerships."
    },{
      title: "",
      description: "Discount Percentage VS Ratings",
      imgUrl: code19,
      data:"The graph depicts the relationship between ratings (on the x-axis) and discount percentage (on the y-axis).A sharp spike in discount percentage occurs around a rating of 0.As ratings increase, the discount percentage fluctuates but generally shows an upward trend."
    },

    {
      title: "Comparision 1",
      description: "Men's Shoes VS Women's Shoes",
      imgUrl: code4,
      data:"There is a noticeable peak at the lower end (around rating 1.5), followed by a gradual decline and a more stable trend towards higher ratings.The curve remains relatively flat across the rating spectrum, suggesting fewer extreme ratings"
    },
    {
      title: "Comparision 2",
      description: "Men's Clothing VS Women's Clothing",
      imgUrl: code5,
      data:"There are noticeable peaks around ratings 3 to 4.Both men's and women's clothing categories exhibit significant variability in ratings, suggesting fluctuating customer satisfaction levels."
    },
    {
      title: "Mens",
      description: "Discount Percentage VS Ratings",
      imgUrl: code6,
      data:"This graph shows a relation between discount percentage and ratings. There are tick marks on the horizontal axis from 1.0 to 5.0, but it is not clear what the increments represent."
    },
    {
      title: "Womens",
      description: "Discount Percentage VS Ratings",
      imgUrl: code7,
      data:"This graph appears to show a relationship between discount percentage and ratings.There are tick marks on the horizontal axis from 1.0 to 5.0, but it is not clear what the increments represent."
    },
    
  ];

  const hypothesis = [

    // Mera
    {
      title: "Lowest Category",
      description: "Discount Percentage VS Ratings",
      imgUrl: code1,
      data:"H0: Discount Percentage and Ratings are not significant of eachother for lowest category. Ha: Discount Percentage and Ratings are significant of eachother for lowest category. Alpha = 0.05.True : We reject null hypothesis"
    },
    {
      title: "Coorelation Analysis 1",
      description: "Actual Price VS Ratings",
      imgUrl: code2,
      data:"H0: Discount Percentage and Ratings are not significant of eachother for whole data. Ha: Discount Percentage and Ratings are significant of eachother for whole data.Alpha = 0.05. True : We reject null hypothesis."
    },
    {
      title: "Coorelation Analysis 2",
      description: "Actual Price VS Ratings by Main Category",
      imgUrl: code3,
      data:"H0: Discount Percentage and Ratings are significant of eachother for all category.Ha: Discount Percentage and Ratings are not significant of eachother for all category.Alpha = 0.05. True : We reject null hypothesis. "
    },
    
    //Krisha
    
    {
      title: "Highest Rated Category",
      description: "Discount Percentage VS Ratings",
      imgUrl: code9,
      data:"Ha=ratings and discount perc are not significance for highest rated category.H0=ratings and discount perc are significance for highest rated category. Reject H0. ratings and discount perc are not significance for highest rated category."
    },
    {
      title: "Highest Rated Category",
      description: "Actual Price VS Ratings",
      imgUrl: code10,
      data:"Ha=ratings and actual price are not significance for highest rated category.H0=ratings and actual price are significance for highest rated category.Reject H0.Ratings and actual price are not significance for highest rated category."
    },
    {
      title: "High Rated Product",
      description: "Discount Percentage VS Ratings",
      imgUrl: code11,
      data:"Ha=rating and discount percentage are significance for high rated products.H0=rating and discount percentage are not significance for high rated products. Reject H0.Rating and discount percentage are significance for high rated products"
    },
    
    {
      title: "High Rated Product",
      description: "Actual Price VS Ratings",
      imgUrl: code13,
      data:"Ha=rating and actual price are significance for high rated products.H0=rating and actual price are not significance for high rated products. Reject H0.Rating and actual price are significance for high rated products"
    },
    {
      title: "Low Rated Product",
      description: "Actual Price VS Ratings",
      imgUrl: code14,
      data:"Ha=rating and actual price are not significance for low rated products.H0=rating and actual price are significance for low rated products.Reject H0.Rating and actual price are not significance for low rated products"
    },
    
    

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Python</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Hypothesis Testing</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Col>
                        {
                          projects.map((project, index) => {
                            return (
                              <PythonCard
                                key={index}
                                {...project}
                                />
                               
                            )
                          })
                        }
                        
                      </Col>
                    </Tab.Pane>
                   
                    <Tab.Pane eventKey="second">
                    <Col>
                        {
                          hypothesis.map((project, index) => {
                            return (
                              <PythonCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        
                      </Col>
                      
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