import axios from 'axios';
import AuthReducer from './AuthReducer';
import { createContext, useEffect, useReducer, useState } from 'react';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(`user`)) || null,
  isFetching: false,
  error: false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const { user } = state;

  const [addedFave, setAddedFave] = useState(user ? user.favorites : []);

  const [currentUser, setCurrentUser] = useState(user);

  const [searchBar, setSearchBar] = useState(true);

  useEffect(() => {
    if (user) {
      setAddedFave(user.favorites);

      setCurrentUser(user);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setAddedFave(user.favorites);
      setCurrentUser(user);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(state.user));
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(currentUser));
  }, [currentUser]);

  let newF;
  // adds favorite to the local storage and user object
  const addFavorite = async (user, _id) => {
    try {
      newF = addedFave.filter((item) => item !== _id);
      const newFavorites = [...newF, _id];
      const response = await axios.patch(`${process.env.REACT_APP_API_URL}/users/update/${user._id}`, {
        favorites: newFavorites,
      });
      setAddedFave(newFavorites);
      if (user) {
        setCurrentUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // deletes favorite from the local storage and user object
  const deleteFavorite = async (user, _id) => {
    const newList = currentUser.favorites.filter((item) => item !== _id);

    try {
      const response = await axios.patch(`${process.env.REACT_APP_API_URL}/users/update/${user._id}`, {
        favorites: newList,
      });

      setCurrentUser(response.data);
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
        addFavorite,
        deleteFavorite,
        currentUser,
        setCurrentUser,
        searchBar,
        setSearchBar,
      }}
    >
      {!state.isFetching && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
