import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AddressForm = () => {
  return (
    <Card style={cardStyles}>
      <Card.Header>Shipping Address</Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <input style={inputStyles} type="text" name="first_name" placeholder="First Name" />
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
            <input style={inputStyles} type="text" name="street_name" placeholder="Street Name" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
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

export default AddressForm;
