import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PowerBICard } from "./PowerBICard ";
import Report1 from "../assets/img/Report1.jpg"
import Report2 from "../assets/img/Report2.jpg"
import Report3 from "../assets/img/Report3.jpg";
import Report4 from "../assets/img/Report4.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const PowerBI = () => {

    const report1 = [
        {
            title: "Report1",
            description: "Rating analysis by category",
            imgUrl: Report1,
        }
    ];
    const report2 = [
        {
            title: "Report2",
            description: "Actual price analysis by category",
            imgUrl: Report2,
        }
    ];
    const report3 = [
        {
            title: "Report3",
            description: "Discount price analysis by category",
            imgUrl: Report3,
        }
    ];
    const report4 = [
        {
            title: "Report4",
            description: "Actual price analysis by products",
            imgUrl: Report4,
        }
    ];

    return (
        <section className="project krisha" id="powerBi">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                                    <h2>PowerBI</h2>
                                    <p>
                                    Power BI is a Microsoft analytics tool that integrates data from various sources, providing advanced transformation, interactive visualizations, and insightful reports for informed decision-making, such as analyzing Amazon product performance.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Report 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Report 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Report 3</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth">Report 4</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate_animated animate_slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        report1.map((project, index) => {
                                                            return (
                                                                <PowerBICard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                    <p>
                                                    The dashboard focuses on ratings analysis. The overall average rating across all products is 2.32 out of 5, with a total sum of ratings at 1,225,319.30. The average number of ratings per product is 574.24. Grocery & gourmet foods have the highest average rating by main category at 3.7, while men's shoes have the lowest at 1.4. In the sub-category breakdown, Value Bazar leads with the highest average rating. The distribution of ratings across HIGH_RATE, NOT_RATE, and LOW_RATE categories is shown, with HIGH_RATE having the most ratings. A company-wise average rating chart is also provided, with Amazon appearing to have a high average rating.
                                                    </p>
                                                    <a href="https://app.powerbi.com/reportEmbed?reportId=5f56865b-6bfe-4501-b989-c70ab2fd0532&autoAuth=true&ctid=b87386c8-9083-4a27-9ddf-63a3dfa33850">Link to open dashboard</a>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        report2.map((project, index) => {
                                                            return (
                                                                <PowerBICard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                    <p>
                                                    This dashboard shifts focus to actual prices, with a total sum of 2,335,907,699. The category breakdown remains similar, but accessories now show a much higher actual price sum of 0.89bn. The sub-category analysis reveals Gold & Diamond Jewellery leading with 0.60bn in actual prices. The HIGH_RATE category shows the highest sum of actual prices at 1.12bn. A company-wise breakdown is provided, with PC leading at 16.39% of the total actual price sum, followed by Avsar and Nike. This image provides insights into pricing strategies and the value distribution across categories and companies.

                                                    </p>
                                                    <a href="https://app.powerbi.com/reportEmbed?reportId=002776b8-629f-4c3d-8fb5-d62036fce3ad&autoAuth=true&ctid=b87386c8-9083-4a27-9ddf-63a3dfa33850">Link to open dashboard</a>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        report3.map((project, index) => {
                                                            return (
                                                                <PowerBICard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                    <p>
                                                    This dashboard showcases an overview of Amazon's product analysis, focusing on discount prices. The total sum of discount prices is 1,265,296,437, with 41,985 companies and 378,542 unique product names analyzed. The main categories are displayed on the left, with accessories leading in discount prices at 0.58bn, followed by TV, audio & cameras at 0.21bn. The sub-category breakdown shows Gold & Diamond Jewellery with the highest discount price sum at 0.46bn. There's also an analysis of discount prices by rating categories (HIGH_RATE, NOT_RATE, LOW_RATE), with NOT_RATE having the highest sum at 0.68bn. The main category distribution is visualized in a pie chart, showing accessories as the dominant category.

                                                    </p>
                                                    <a href="https://app.powerbi.com/reportEmbed?reportId=7983e642-fe12-48db-bf8a-2dcdf4946f1f&autoAuth=true&ctid=b87386c8-9083-4a27-9ddf-63a3dfa33850">Link to open dashboard</a>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <Row>
                                                    {
                                                        report4.map((project, index) => {
                                                            return (
                                                                <PowerBICard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                    <p>
                                                    This dashboard delves deeper into product-specific analysis. It shows the top products by actual price, with jewelry items from Avsar and PC Jeweller dominating the list. The discount percentage analysis reveals that Zeya Yellow Gold Ring has the highest sum of discount percentage, followed by various PC Jeweller products. This suggests that high-value items, particularly in the jewelry category, tend to have the highest discounts. The product distribution across rating categories is also shown, with HIGH_RATE products being the most numerous. A pie chart of top-rated products is included, in which top is the JBL products

                                                    </p>
                                                    <a href="https://app.powerbi.com/reportEmbed?reportId=002776b8-629f-4c3d-8fb5-d62036fce3ad&autoAuth=true&ctid=b87386c8-9083-4a27-9ddf-63a3dfa33850" >Link to open dashboard</a>
                                                </Row>
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