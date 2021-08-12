import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Card, Form, Alert, Button, Container } from 'react-bootstrap';

const ResetPasswordPage = () => {
  const emailRef = useRef();

  const [success, setSuccess] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    document.getElementById('btn-reset').disabled = true;

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/reset-password`, {
        email: emailRef.current.value,
      });

      if (!response.statusText) return setSuccess(false);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.error(error);
      document.getElementById('btn-reset').disabled = false;
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
            <h2 className="text-center mb-4">Reset Password</h2>
            <Form onSubmit={handleResetPassword}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <br />

              {!success && (
                <Button
                  type="submit"
                  id="btn-reset"
                  className="w-100"
                  style={{ background: 'var(--color-main)' }}
                >
                  Reset
                </Button>
              )}

              {success && <Alert variant="success">Reset password email sent.</Alert>}
              {success === false && (
                <Alert variant="danger" className="mt-3">
                  Email does not exist!
                </Alert>
              )}
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account?
          <Link to="/signup" style={{ color: 'var(--color-main)' }}>
            {' '}
            Sign Up
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ResetPasswordPage;
