import { Col } from "react-bootstrap";

export const PowerBICard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx-python">
        <img src={imgUrl} />
        <div className="proj-txtx-python">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}