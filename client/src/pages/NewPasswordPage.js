import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Form, Alert, Button, Container } from 'react-bootstrap';
const NewPasswordPage = () => {
  const { id } = useParams();

  const [success, setSuccess] = useState(null);

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    document.getElementById('btn-submit').disabled = true;

    if (confirmPasswordRef.current.value !== passwordRef.current.value)
      return confirmPassword.current.setCustomValidity(`Passwords doesn't match!`);

    try {
      const response = await axios.patch(`${process.env.REACT_APP_API_URL}/users/update/${id}`, {
        password: passwordRef.current.value,
      });

      if (!response.statusText) return setSuccess(false);

      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.error(error);
      document.getElementById('btn-submit').disabled = false;
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: '75vh' }}
    >
      <div>
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <h2 className="text-center mb-4">New password</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <br />
              <Form.Group id="confirm-password">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" ref={confirmPasswordRef} required />
              </Form.Group>
              <br />

              {success === null && (
                <Button
                  type="submit"
                  id="btn-submit"
                  className="w-100"
                  style={{ background: 'var(--color-main)' }}
                >
                  Submit
                </Button>
              )}

              {success && (
                <div className="w-100 text-center mt-2">
                  <Alert variant="success">
                    Password changed
                    <Link to="/signin" style={{ color: 'var(--color-main)' }}>
                      {' '}
                      Sign in
                    </Link>
                  </Alert>
                </div>
              )}
              {success === false && <Alert variant="danger">Cannot change password</Alert>}
            </Form>
          </Card.Body>
        </Card>
        {!success && (
          <div className="w-100 text-center mt-2">
            Need an account?
            <Link to="/signup" style={{ color: 'var(--color-main)' }}>
              {' '}
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default NewPasswordPage;
