import React from "react";

const Product = ({productImg, title, description, price}) => {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src= {productImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Card.Text>
        {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


export default Product;