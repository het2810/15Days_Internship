import { Col } from "react-bootstrap";

export const SQLCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
