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
  const [state, dispatch] = useReducer(
    AuthReducer,
    INITIAL_STATE,
    //  () => {
    // const localData = localStorage.getItem('user');
    // return localData ? JSON.parse(localData) : INITIAL_STATE;
    // }
  );

  const { user } = useContext(AuthContext);
  const [addedFave, setAddedFave] = useState(user ? user.favorites : []);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(state.user));
  }, [state.user]);
  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(currentUser));
  }, [currentUser]);

  // adds favorite to the local storage

  const addFave = async (_id) => {
    setAddedFave((prev) => [...prev, _id]);
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, {
        favorites: addedFave,
      });

      if (user) {
        console.log('this is a current user', currentUser);
        setCurrentUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // deletes favorite from the local storage

  const deleteFave = async (user, _id) => {
    const newList = user.favorites.filter((item) => item !== _id);

    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, {
        favorites: newList,
      });

      if (user) {
        console.log('this is a current user', user);
        setCurrentUser(response.data);
      }
      window.location.reload();
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
        deleteFave,
        currentUser,
        setCurrentUser,
      }}
    >
      {!state.isFetching && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
