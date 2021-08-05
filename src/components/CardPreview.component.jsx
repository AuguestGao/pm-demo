import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPreview = ({ id, title, text }) => (
  <Card
    className="mx-2 my-3 shadow cardPreview"
    style={{ width: "18rem", height: "10rem", cursor: "pointer" }}
  >
    <Link to={`project/${id}`}>
      <Card.Body>
        <Card.Title className="text-center mb-3 ">
          {title.toUpperCase()}
        </Card.Title>
        <hr />
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Link>
  </Card>
);

export default CardPreview;
