import { Container, Row, Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon22.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <div className="social-icon">
              <h4>Authors</h4>
              Het Patel <a href="https://github.com/het2810"><img src={navIcon2} alt="Icon" /></a><br></br>
              Harsh Lohana <a href="https://github.com/HarshilLohana"><img src={navIcon2} alt="Icon" /></a><br></br>
              Krisha Patel <a href="https://github.com/krishapatel14"><img src={navIcon2} alt="Icon" /></a><br></br>
              Parshwa <a href="https://github.com/parshwa9324"><img src={navIcon2} alt="Icon" /></a><br></br>
              Pratik Bajaj <a href="https://github.com/Pratikbajaj"><img src={navIcon2} alt="Icon" /></a><br></br>
              Viral Modi <a href="https://github.com/ViruModi228"><img src={navIcon2} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}