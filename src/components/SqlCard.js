import { Col } from "react-bootstrap";

export const SQLCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={6}>
      <div className="proj-imgbx-python">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx-python">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
