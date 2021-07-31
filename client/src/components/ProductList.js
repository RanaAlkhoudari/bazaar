import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiFrown } from 'react-icons/fi';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { MdCached } from 'react-icons/md';

function ProductList(props) {
  const sortedProducts = props.products;

  const notifyIcon = (product) => {
    switch (product) {
      case true:
        return (
          <>
            <span style={{ color: 'green', height: '1em', fontWeight: 'bold' }}>Recommended </span>
            <HiOutlineEmojiHappy size="1.5em" color="green" />
          </>
        );
      case false:
        return (
          <>
            <span style={{ color: 'red', height: '1em', fontWeight: 'bold' }}>
              Not recommended{' '}
            </span>
            <FiFrown size="1.5em" color="red" />
          </>
        );
      case null:
        return (
          <>
            <span style={{ color: 'blue', height: '1em', fontWeight: 'bold' }}>
              Pending to Verify{' '}
            </span>

            <MdCached size="1.5em" color="blue" />
          </>
        );
    }
  };

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
                  <Card.Body style={{ color: 'var(--color-main)' }}>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price} €</Card.Text>
                    <Card.Text>{notifyIcon(product.verified)}</Card.Text>
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
