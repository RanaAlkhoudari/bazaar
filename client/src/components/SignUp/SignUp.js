import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const firstNameRef = useRef(false);
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const user = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      setError('');
      setLoading(true);
      await axios.post(`http://localhost:3000/api/v1/users/signup`, user);
      history.push('/');
    } catch (e) {
      console.log(e);
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: '75vh' }}
      >
        <div className="w-200">
          <Card style={{ width: '22rem' }}>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="firstNameRef">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" ref={firstNameRef} required />
                </Form.Group>
                <Form.Group id="lastNameRef">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" ref={lastNameRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button
                  disabled={loading}
                  className="w-100"
                  type="submit"
                  style={{ background: 'var(--color-main)' }}
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account?{' '}
            <Link to="/signin" style={{ color: 'var(--color-main)' }}>
              Sign In
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
