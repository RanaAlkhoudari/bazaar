import React, { useContext } from 'react';
import axios from 'axios';
import { FacebookLoginButton } from 'react-social-login-buttons';

import { useHistory } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import { AuthContext } from '../context/AuthContext';

function FacebookSignIn() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  async function responseFacebook(response) {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/facebooklogin',
      data: {
        accessToken: response.accessToken,
        userID: response.userID,
        picture: response.picture.data.url,
      },
    });

    function facebookLoginCall(userCredential, dispatch) {
      dispatch({ type: 'LOGIN_START' });
      try {
        dispatch({ type: `LOGIN_SUCCESS`, payload: res.data });
        history.push('/');
      } catch (err) {
        dispatch({ type: `LOGIN_FAILURE`, payload: err.response.data });
      }
    }
    facebookLoginCall({ email: res.data.email, password: res.data.password }, dispatch);
  }

  return (
    <Card style={{ width: '350px' }}>
      <Card.Header style={{ margin: '0 auto' }}>
        <FacebookLogin
          appId={process.env.FACEBOOK_APP_ID}
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          callback={responseFacebook}
          icon="fab fa-facebook-square"
        />
      </Card.Header>
    </Card>
  );
}

export default FacebookSignIn;
