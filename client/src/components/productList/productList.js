import React from 'react';
import { Card } from 'react-bootstrap';
import { First } from 'react-bootstrap/esm/PageItem';
import { Link } from 'react-router-dom';

function ProductList(props) {
  const sortedProducts = props.products;
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {sortedProducts.length !== 0 &&
          sortedProducts.map((product) => {
            return (
              <Card className="m-3" style={{ width: '15rem' }} key={product._id}>
                <Link to={`/${product._id}`} style={{ textDecoration: 'none' }}>
                  <Card.Img
                    variant="top"
                    src={product.images}
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  <Card.Body style={{ color: 'teal' }}>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price} €</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default ProductList;
