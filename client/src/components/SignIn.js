import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import { Link, useHistory } from 'react-router-dom';
import { loginCall } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';
import { Container, Form, Button, Card, Alert, Image } from 'react-bootstrap';
import Facebook from './facebook';

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { error, dispatch, user } = useContext(AuthContext);
  const history = useHistory();

  if (user) {
    history.push('/');
  }

  async function handleLogin(e) {
    e.preventDefault();
    loginCall({ email: emailRef.current.value, password: passwordRef.current.value }, dispatch);
  }
  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: '75vh' }}
    >
      <div>
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button className="w-100" type="submit" style={{ background: 'var(--color-main)' }}>
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account?{' '}
          <Link to="/signup" style={{ color: 'var(--color-main)' }}>
            Sign Up
          </Link>
        </div>
        <Facebook />
      </div>
    </Container>
  );
};

export default SignIn;
//https://www.termsfeed.com/live/07230a08-1c38-4612-b6c9-361503bc1bd8
