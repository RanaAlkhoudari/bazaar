import axios from 'axios';
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const SignUp = () => {
  const history = useHistory();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const lastNameRef = useRef();
  const passwordConfirmRef = useRef();
  const firstNameRef = useRef(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError('Passwords do not match');


    if (passwordRef.current.value.length < 6)
      return setError('Passwords must consist of minimum 6 symbols');


    let passwordWithNum = [];
    Object.assign([], passwordRef.current.value).forEach((item) => {
      const isNumeric = /^-?\d+$/.test(item);
      isNumeric && passwordWithNum.push(item);
    });

    if (passwordWithNum.length === 0)
      return setError('Password must include at least one number');

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);

      let validateEmail = response.data.find((item) => emailRef.current.value === item.email);

      if (validateEmail !== undefined)
        return setError('An account with this email already exists');

    } catch (e) {
      setError('Failed to create an account');
    }

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      last_name: lastNameRef.current.value,
      first_name: firstNameRef.current.value,
    };

    try {
      setError('');
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, user);
      await axios.get(`${process.env.REACT_APP_API_URL}/users`);

      setSuccess(true);

      setTimeout(() => {
        history.push('/signin');
      }, 2500);
    } catch (e) {
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
              {success && (
                <Alert variant="success">Your account has been created successfully</Alert>
              )}
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
          <GoogleSignIn />
          <FacebookSignIn />
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
