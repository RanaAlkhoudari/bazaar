import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

function UserDetail({ product }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/users/${product.user}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Card style={{ width: '12rem', margin: '0 auto' }}>
      <Card.Img style={{ height: '200px' }} variant="top" src={user.avatar} />
      <Card.Body>
        <Card.Title>
          {user.first_name} {user.last_name}
        </Card.Title>
        <Button className="w-100" style={{ backgroundColor: 'var(--color-main)' }}>
          Send a message
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserDetail;
