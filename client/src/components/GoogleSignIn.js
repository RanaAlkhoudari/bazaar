import React, { useState, useContext } from 'react';
import { Container, Form, Button, Card, Alert, Image } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function GoogleSignIn() {
  const { dispatch } = useContext(AuthContext);
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  async function responseGoogle(response) {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/googleLogin',
      data: {
        accessToken: response.accessToken,
        userID: response.Zb.id_token,
        email: response.profileObj.email,
      },
    });
    console.log(res);
    const loginCall = async (userCredential, dispatch) => {
      dispatch({ type: 'LOGIN_START' });
      try {
        dispatch({ type: `LOGIN_SUCCESS`, payload: res.data });
      } catch (err) {
        dispatch({ type: `LOGIN_FAILURE`, payload: err.response.data });
      }
    };
    loginCall({ email: res.data.email, password: res.data.password }, dispatch);
  }
  return (
    <Card style={{ width: '350px' }}>
      <Card.Header style={{ margin: '0 auto' }}>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          style={{ width: '350px' }}
        />
      </Card.Header>
    </Card>
  );
}
export default GoogleSignIn;
