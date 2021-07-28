import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Payment from '../components/Payment';
import { Row, Col, Card } from 'react-bootstrap';

const Checkout = (prop) => {
  const product = prop.location.state;

  const [seller, setSeller] = useState([]);

  useEffect(() => {
    fetchSellerData();
  }, []);

  async function fetchSellerData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/users/${product.user}`);
      setSeller(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Row style={{ margin: 'auto' }}>
      <Col md={8}>
        <Card style={cardStyles}>
          <Card.Header>{product.title}</Card.Header>
          <Card.Body style={{ display: 'flex' }}>
            <div style={{ width: '200px', marginRight: '20px' }}>
              <img
                style={{ width: '100%', borderRadius: '0.5rem' }}
                src={product.images[0]}
                alt="Product Image"
              />
            </div>
            <div>
              <h5>{product.price} €</h5>
              <p>{product.description}</p>
            </div>
          </Card.Body>
        </Card>
        <Card style={cardStyles}>
          <Card.Header>Shipping Address</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <input
                  style={inputStyles}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                />
              </Col>
              <Col md={6}>
                <input style={inputStyles} type="text" name="last_name" placeholder="Last Name" />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <input style={inputStyles} type="text" name="city" placeholder="City" />
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <input style={inputStyles} type="text" name="post_code" placeholder="PostCode" />
              </Col>
              <Col md={4}>
                <input
                  style={inputStyles}
                  type="text"
                  name="building_number"
                  placeholder="Building Number"
                />
              </Col>
              <Col md={4}>
                <input style={inputStyles} type="text" name="extension" placeholder="Extra" />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <input
                  style={inputStyles}
                  type="text"
                  name="street_name"
                  placeholder="Street Name"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card style={cardStyles}>
          <Card.Header>Credit Card Info</Card.Header>
          <Card.Body>
            <Payment product={product} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <div style={{ textAlign: 'center', paddingTop: '10rem' }}>
          <img
            style={{
              width: '10rem',
              height: '10rem',
              borderRadius: '1rem',
              padding: '5px',
              border: '1px solid var(--color-main)',
            }}
            src="https://www.tele2.nl/blog/wp-content/uploads/2020/08/facebook-avatar-maken-tips-tele2.jpg"
            alt="User image"
          />
          <h3>
            {seller.first_name} {seller.last_name}
          </h3>
        </div>
      </Col>
    </Row>
  );
};

const inputStyles = {
  marginBottom: '10px',
  width: '100%',
};

const cardStyles = {
  borderColor: 'var(--color-main)',
  marginBottom: '10px',
};

export default Checkout;
