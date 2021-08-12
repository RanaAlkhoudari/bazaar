import { loginCall } from '../apiCalls';
import GoogleSignIn from './GoogleSignIn';
import { useContext, useRef } from 'react';
import FacebookSignIn from './FacebookSignIn';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const SignIn = () => {
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const { error, dispatch, user } = useContext(AuthContext);

  if (user) history.push('/');

  async function handleLogin(e) {
    e.preventDefault();

    loginCall({ email: emailRef.current.value, password: passwordRef.current.value }, dispatch);
  };

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
          <Link to={`/reset-password`} style={{ color: 'var(--color-main)' }}>
            Forgot Password?
          </Link>
        </div>
        <div className="w-100 text-center mt-2">
          Need an account?
          <Link to="/signup" style={{ color: 'var(--color-main)' }}>
            {' '}
            Sign Up
          </Link>
        </div>
        <GoogleSignIn />
        <FacebookSignIn />
      </div>
    </Container>
  );
};

export default SignIn;
