import React, { createContext, useEffect, useReducer, useState, useContext } from 'react';
import AuthReducer from './AuthReducer';
import axios from 'axios';
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(`user`)) || null,
  isFetching: false,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(state.user));
  }, [state.user]);
  const [setState, setSetState] = useState([]);

  const addFave = async (_id) => {
    console.log('from auth', _id);
    setSetState((prev) => [...prev, _id]);
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, {
        favorites: setState,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        addFave,
      }}
    >
      {!state.isFetching && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
