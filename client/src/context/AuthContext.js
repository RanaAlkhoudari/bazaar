import React, { createContext, useEffect, useReducer, useState } from 'react';
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

  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(state.user));
  }, [state.user]);
  const [setState, setSetState] = useState();

  const addFave = async (_id) => {
    console.log('from auth', _id);
    const newList = user.favorites.filter((item) => item !== _id);
    // setSetState(newList);
    console.log(setState);
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/v1/users/update/${_id}`,
        // setSetState(newList),
        console.log(state.user),
      );
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
