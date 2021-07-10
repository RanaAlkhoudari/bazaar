import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ image, title, description, price }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
