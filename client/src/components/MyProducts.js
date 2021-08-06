import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotifyIcon from './NotifyIcon';
import CardRow from './CardRow';
import { Button } from 'react-bootstrap';

const MyProducts = ({ data }) => {
  const productsItems = data.map((product) => {
    return (
      <CardRow key={product._id}>
        <Col style={{ maxWidth: '100px', padding: '0' }}>
          <Link to={`/${product._id}`} style={{ textDecoration: 'none' }}>
            <img src={product.images[0]} alt={product.title} style={{ width: '100px' }} />
          </Link>
        </Col>
        <Col>
          <span style={{ height: '3em', fontWeight: 'bold' }}> {product.title}</span>
        </Col>
        <Col style={{ textAlign: 'left' }}>
          <span style={{ height: '3em', fontWeight: 'bold' }}>Price : {product.price} €</span>
        </Col>
        <Col style={{ textAlign: 'right' }}>
          <NotifyIcon product={product.verified} />
        </Col>
        <Col style={{ textAlign: 'right' }}>
          <Button
            id={product.product_id}
            onClick={() => console.log('delete this product', product._id)}
            style={{ backgroundColor: 'red', color: 'white', margin: '0 10px' }}
          >
            delete
          </Button>
        </Col>
      </CardRow>
    );
  });
  return <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>{productsItems}</div>;
};

export default MyProducts;
