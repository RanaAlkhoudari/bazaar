import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Profile from '../components/Profile';
import { AuthContext } from '../context/AuthContext';
import Orders from '../components/Orders';
import Favorites from '../components/Favorites';
import Notifications from '../components/Notifications';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { Container, Alert } from 'react-bootstrap';
import LoadingImage from '../images/Loading.gif';

const myAccountPage = () => {
  const tabStyle = {
    height: '25px',
    width: '25px',
    backgroundColor: '#bbb',
    color: 'white',
    borderRadius: '50%',
    display: 'inline-block',
    textAlign: 'center',
    marginLeft: '0.3rem',
  };
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const { user } = useContext(AuthContext);
  const [userFromDB, setUserFromDB] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/users/${user._id}`);
      setUserFromDB(response.data);
      setIsLoaded(true);
      setErr(false);
    } catch (error) {
      console.log(error);
      setIsLoaded(false);
      setErr(true);
    }
  };

  if (!isLoaded && !err) {
    return (
      <img src={LoadingImage} style={{ margin: '0 auto', display: 'block', height: '65vh' }} />
    );
  }

  console.log(userFromDB);

  return (
    <>
      {isLoaded && !err ? (
        <Container>
          <h1>My Account</h1>
          <Tabs
            headerStyle={{ color: '#adadad', cursor: 'default' }}
            activeHeaderStyle={{ fontWeight: 'bold', color: 'black' }}
          >
            <Tab
              label={
                <React.Fragment>
                  Orders
                  <span style={tabStyle}>{userFromDB.orders.length}</span>
                </React.Fragment>
              }
            >
              <Orders orders={isLoaded ? userFromDB.orders : <></>} />
            </Tab>
            <Tab
              label={
                <React.Fragment>
                  Notifications
                  <span style={tabStyle}>{userFromDB.products.length}</span>
                </React.Fragment>
              }
            >
              <Notifications data={isLoaded ? userFromDB.products : <></>} />
            </Tab>
            <Tab
              label={
                <React.Fragment>
                  Favorites
                  <span style={tabStyle}>{userFromDB.favorites.length}</span>
                </React.Fragment>
              }
            >
              <Favorites orders={isLoaded ? userFromDB.favorites : <></>} />
            </Tab>
          </Tabs>
          <hr />
          <Profile user={isLoaded ? userFromDB : <></>} />
        </Container>
      ) : (
        <Container>
          <Alert variant="danger">You are logged out. Please log in.</Alert>
        </Container>
      )}
    </>
  );
};

export default myAccountPage;
