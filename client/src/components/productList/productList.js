import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productList from '../productList/productList.css';

function ProductList(props) {
  const sortedProducts = props.products;
  return (
    <>
      <div className={productList.container}>
        {sortedProducts.length !== 0 &&
          sortedProducts.map((product) => {
            return (
              <Card className={productList.card} key={product._id}>
                <Link to={`/${product._id}`}>
                  <Card.Img variant="top" src={product.images} />
                  <Card.Body>
                    <Card.Title className={productList.title}>{product.title}</Card.Title>
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
