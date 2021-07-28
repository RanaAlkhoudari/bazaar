import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Button, Card, Alert, Image } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Facebook() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  async function responseFacebook(response) {
    console.log(response);
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/facebooklogin',
      data: { accessToken: response.accessToken, userID: response.userID, email: response.email },
    });
    console.log(res);

    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <Card style={{ width: '350px' }}>
      <Card.Header style={{ margin: '0 auto' }}>
        {!login && (
          <FacebookLogin
            appId="2276189235845599"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            icon="fa-facebook"
          />
        )}
        {login && <Image src={picture} roundedCircle />}
      </Card.Header>
      {login && (
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.email}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
}

export default Facebook;
