import axios from 'axios';

const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post(`http://localhost:3000/api/v1/users/signin`, userCredential);
    dispatch({ type: `LOGIN_SUCCESS`, payload: res.data });
  } catch (err) {
    dispatch({ type: `LOGIN_FAILURE`, payload: err.response.data });
  }
};

export { loginCall };
