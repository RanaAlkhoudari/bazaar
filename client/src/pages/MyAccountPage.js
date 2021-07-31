import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Profile from '../components/Profile';
import { AuthContext } from '../context/AuthContext';
import Orders from '../components/Orders';
<<<<<<< HEAD
import Favorites from '../components/myAccount/favorites';
import Notifications from '../components/myAccount/Notifications';
=======
import Favorites from '../components/Favorites';
import Notifications from '../components/Notifications';
>>>>>>> dev
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { Container, Alert } from 'react-bootstrap';

const myAccountPage = () => {
  const { user } = useContext(AuthContext);
  const [userFromDB, setUserFromDB] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/users/${user._id}`);
      setUserFromDB(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
<<<<<<< HEAD
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/addresses/${user.address}`);
      setAddress(response.data);
    } catch (error) {
      console.log(error);
    }
  }
=======
>>>>>>> dev

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
            <Tab label="orders">
              {isLoading ? <div>Loading...</div> : <Orders orders={userFromDB.orders} />}
            </Tab>
            <Tab label="notifications">
              <Notifications />
            </Tab>
            <Tab label="favorites">
              <Favorites />
            </Tab>
          </Tabs>
          <hr />
          {isLoading ? <div>Loading...</div> : <Profile user={userFromDB} />}
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
