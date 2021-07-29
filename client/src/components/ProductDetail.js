import React, { useContext, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useListContext } from '../context/FaveContext';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function ProductDetail({ product }) {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const [faves, setFaves] = useState([]);

  const goToCheckout = () =>
    history.push({
      pathname: '/orders/checkout',
      state: product,
    });

  const { addFave } = useContext(AuthContext);

  // adds favorite to the database
  async function addFavorite(newFave) {
    console.log(user);
    try {
      await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, {
        favorites: faves,
      });
      addFave(product._id);
    } catch (error) {
      console.log(error);
    }
    setFaves((prev) => [...prev, newFave]);
  }
  let addF;

  function AddBtn({ product, currentUser }) {
    addF = currentUser.favorites.find((item) => item.id === product._id);

    return addF;
  }

  return (
    <div key={product._id}>
      <Card style={{ borderColor: 'var(--color-main)' }}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Img
                style={{ minWidth: '250px', height: '300px' }}
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
                  <Button
                    className="w-100"
                    style={{ backgroundColor: 'var(--color-main)' }}
                    onClick={() => {
                      addFavorite(product._id);
                    }}
                  >
                    {currentUser && !currentUser.favorites.includes(product._id) ? (
                      <AiFillStar style={{ color: 'yellow' }} />
                    ) : (
                      <AiFillStar style={{ color: 'red' }} />
                    )}
                  </Button>
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
}

export default ProductDetail;
