import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Profile from '../components/Profile';
import { AuthContext } from '../context/AuthContext';
import Orders from '../components/Orders';
import Favorites from '../components/Favorites';
import Notifications from '../components/Notifications';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { Container, Alert } from 'react-bootstrap';

const myAccountPage = () => {
  const { user } = useContext(AuthContext);
  const [userFromDB, setUserFromDB] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/users/${user._id}`);

      setUserFromDB(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <Container>
          <h1>My Account</h1>
          <Tabs
            headerStyle={{ color: 'var(--color-grey)', cursor: 'default' }}
            activeHeaderStyle={{ fontWeight: 'bold', color: 'black' }}
            contentStyle={{}}
            selected="orders"
          >
            <Tab label="orders">{userFromDB && <Orders orders={userFromDB.orders} />}</Tab>
            <Tab label="notifications">
              <Notifications />
            </Tab>
            <Tab label="favorites">
              <Favorites />
            </Tab>
          </Tabs>
          <hr />
          <Profile user={userFromDB} />
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
