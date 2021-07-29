import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Payment from '../components/Payment';
import { Row, Col, Card } from 'react-bootstrap';
import AddressesDropdown from '../components/AddressesDropdown';

const Checkout = (prop) => {
  const product = prop.location.state;

  const [seller, setSeller] = useState([]);
  const [shippingAddress, setShippingAddress] = useState(null);

  const getShippingAddress = (address) => setShippingAddress(address);

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

        <AddressesDropdown getShippingAddress={getShippingAddress} />

        <Card style={cardStyles}>
          <Card.Header>Credit Card Info</Card.Header>
          <Card.Body>
            <Payment product={product} shippingAddress={shippingAddress} />
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

const cardStyles = {
  borderColor: 'var(--color-main)',
  marginBottom: '10px',
};

export default Checkout;
