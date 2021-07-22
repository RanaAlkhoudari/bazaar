import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Profile from '../../components/myAccount/Profile';
import { AuthContext } from '../../context/AuthContext';
import Orders from '../../components/myAccount/orders';
import Favorites from '../../components/myAccount/favorites';
import Notifications from '../../components/myAccount/notifications';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { Container, Button } from 'react-bootstrap';
import styles from './myAccountPage.css';

const myAccountPage = () => {
  const [address, setAddress] = useState({});
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/addresses/${id}`);
      setAddress(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {user ? (
        <Container>
          <h1>My Account</h1>
          <Tabs
            headerStyle={{ color: '#adadad', cursor: 'default' }}
            activeHeaderStyle={{ fontWeight: 'bold', color: 'black' }}
            contentStyle={{}}
            selected="orders"
          >
            <Tab label="orders">
              <Orders />
            </Tab>
            <Tab label="notifications">
              <Notifications />
            </Tab>
            <Tab label="favorites">
              <Favorites />
            </Tab>
          </Tabs>
          <hr />
          <Profile
            firstName={user.first_name}
            lastName={user.last_name}
            city={address.city}
            country={address.country}
            phoneNumber={user.phone}
            email={user.email}
            image={user.avatar}
          />
        </Container>
      ) : (
        <h2 className={styles.no_page}>You are logged out. Please log in.</h2>
      )}
    </>
  );
};

export default myAccountPage;
