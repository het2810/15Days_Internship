import { Col } from "react-bootstrap";

export const PythonCard = ({ title, description, imgUrl ,data}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div class="harshil">
      <div className="proj-imgbx-python">
        <img src={imgUrl} />
        <div className="proj-txtx-python">
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>
        
      </div>
      <div class="data">
        <p>{data}</p>
      </div>
      </div>
    </Col>
    
  )
}