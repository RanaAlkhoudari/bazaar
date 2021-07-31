import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const EditProfile = ({ user }) => {
  const [userData, setUserData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    avatar: user.avatar,
  });

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const a = await axios.patch(
        `http://localhost:3000/api/v1/users/update/${user._id}`,
        userData,
      );
      alert('Successfully updated!');
    } catch (err) {
      console.log(err);
    }
  };

  let addresses = [];
  if (user.addresses) {
    addresses = user.addresses.map((address, index) => {
      return (
        <Row key={address.street_name + address.building_number + address.first_name}>
          <Card style={{ borderColor: 'var(--color-main)' }}>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{index == 0 ? 'Default address' : ''}</Card.Title>
                  <Card.Title>
                    {address.first_name} {address.last_name}
                  </Card.Title>
                  <Card.Text>
                    {address.city} - {address.country}
                  </Card.Text>
                  <Card.Text>
                    {address.street_name} {address.building_number} {address.extension}
                  </Card.Text>
                  <Card.Text>Postal code: {address.post_code}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      );
    });
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>
            <img src="user.avatar" alt="avatar" />
          </Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              setUserData({ ...userData, avatar: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            value={userData.first_name}
            onChange={(e) => {
              setUserData({ ...userData, first_name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={userData.last_name}
            onChange={(e) => {
              setUserData({ ...userData, last_name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="text"
            value={userData.phone}
            onChange={(e) => {
              setUserData({ ...userData, phone: e.target.value });
            }}
          />
        </Form.Group>

        <Button className="w-100" type="submit" style={{ background: 'var(--color-main)' }}>
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
