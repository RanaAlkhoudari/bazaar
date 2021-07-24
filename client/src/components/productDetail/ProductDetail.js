import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';

function ProductDetail({ product }) {
  return (
    <div key={product._id}>
      <Card style={{ borderColor: 'var(--color-main)' }}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Img
                style={{ minWidth: '300px', maxHeight: '400px' }}
                src={product.images}
                alt={product.title}
              />
            </Col>
            <Col>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price} €</Card.Text>
              <Card.Text style={{ textAlign: 'left' }}>{product.description}</Card.Text>
              <Row>
                {' '}
                <Col>
                  <Button className="w-100" style={{ backgroundColor: 'var(--color-main)' }}>
                    <AiFillStar style={{ color: 'yellow' }} />
                  </Button>
                </Col>
                <Col>
                  {' '}
                  <Button className="w-100" style={{ backgroundColor: 'var(--color-main)' }}>
                    Buy
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetail;
