import axios from 'axios';
import NotifyIcon from './NotifyIcon';
import { AiFillStar } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Card, Button, Row, Col, Alert } from 'react-bootstrap';

const ProductDetail = ({ product }) => {
  const history = useHistory();

  const [signedIn, setSignedIn] = useState(false);

  const { addFavorite, deleteFavorite } = useContext(AuthContext);
  const { user, currentUser, setSearchBar } = useContext(AuthContext);

  const goToCheckout = async () => {
    try {
      setSearchBar(true);

      await axios.post(`${process.env.REACT_APP_API_URL}/notifications/add`, {
        user: product.user,
        type: 'order',
        text: `the user ${user.first_name} ${user.last_name} is trying to order your product ${product.title}`,
        seen: false,
      });
    } catch (error) {
      console.error(`Error ${error}`);
    }
    history.push({
      pathname: '/orders/checkout',
      state: product,
    });
  };

  setTimeout(() => {
    setSignedIn(false);
  }, 3000);

  return (
    <div key={product._id}>
      <Card style={{ borderColor: 'var(--color-main)' }}>
        <Card.Body>
          {signedIn && <Alert variant="danger">Please Sing In</Alert>}
          <Row>
            <Col>
              <Card.Img style={{ minWidth: '250px' }} src={product.images} alt={product.title} />
            </Col>
            <Col>
              <Card.Title>{product.title}</Card.Title>
              <NotifyIcon product={product.verified} />
              <Card.Text>{product.price} € </Card.Text>
              <Card.Text style={{ textAlign: 'left' }}>{product.description}</Card.Text>
              <Row>
                {' '}
                <Col>
                  {!user ? (
                    <Button
                      className="w-100"
                      style={{ backgroundColor: 'var(--color-main)' }}
                      onClick={() => {
                        setSignedIn(true);
                      }}
                    >
                      <AiFillStar style={{ color: 'yellow' }} />
                    </Button>
                  ) : currentUser && currentUser.favorites.includes(product._id) ? (
                    <Button
                      className="w-100"
                      style={{ backgroundColor: 'var(--color-main)' }}
                      onClick={() => {
                        deleteFavorite(user, product._id);
                      }}
                    >
                      <AiFillStar style={{ color: 'red' }} />{' '}
                    </Button>
                  ) : (
                    <Button
                      className="w-100"
                      style={{ backgroundColor: 'var(--color-main)' }}
                      onClick={() => {
                        addFavorite(user, product._id);
                      }}
                    >
                      <AiFillStar style={{ color: 'yellow' }} />
                    </Button>
                  )}
                </Col>
                <Col>
                  {' '}
                  <Button
                    className="w-100"
                    style={{ backgroundColor: 'var(--color-main)' }}
                    onClick={goToCheckout}
                  >
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
};

export default ProductDetail;
