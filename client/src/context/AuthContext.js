import React, { createContext, useEffect, useReducer, useState } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(`user`)) || null,
  isFetching: false,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(state.user));
  }, [state.user]);

  const deleteFave = async () => {
    console.log(user);
    // try {

    //   const response = await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, {
    //     favorites: fave,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        deleteFave,
      }}
    >
      {!state.isFetching && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
