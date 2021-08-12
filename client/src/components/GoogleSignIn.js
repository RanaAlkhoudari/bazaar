import axios from 'axios';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { AuthContext } from '../context/AuthContext';

const GoogleSignIn = () => {
  const history = useHistory();

  const { dispatch } = useContext(AuthContext);

  async function responseGoogle(response) {
    try {
      const data = {
        accessToken: response.accessToken,
        userID: response.id_token,
        email: response.profileObj.email,
      };

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/googleLogin`, data);

      function loginCall(userCredential, dispatch) {
        dispatch({ type: 'LOGIN_START' });
        try {
          dispatch({ type: `LOGIN_SUCCESS`, payload: res.data });
          history.push('/');
        } catch (err) {
          dispatch({ type: `LOGIN_FAILURE`, payload: err.response.data });
        }
      }
      loginCall({ email: res.data.email, password: res.data.password }, dispatch);
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <Card style={{ width: '350px' }}>
      <Card.Header style={{ margin: '0 auto' }}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          render={(renderProps) => (
            <GoogleButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              label="LOGIN WITH GOOGLE"
              style={{ width: '310px', paddingLeft: '30px' }}
            />
          )}
        />
      </Card.Header>
    </Card>
  );
};

export default GoogleSignIn;
