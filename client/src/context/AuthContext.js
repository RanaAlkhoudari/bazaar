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
  // const [newFaves, setNewFaves] = useState(user.favorites);
  const [currentUser, setCurrentUser] = useState(user);

  const addFave = async (_id) => {
    try {
      setNewFaves((prev) => [...prev, _id]);
      const response = await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, {
        favorites: newFaves,
      });

      if (currentUser) {
        console.log('this is a current user', currentUser);
        setCurrentUser(response.data);
      }
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
        currentUser,
      }}
    >
      {!state.isFetching && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
