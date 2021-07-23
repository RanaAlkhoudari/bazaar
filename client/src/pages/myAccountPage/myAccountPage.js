import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
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
          <div className={styles.middle}>
            <Link to={`/account/ads`}>
              <Button className="w-50" style={{ background: 'var(--color-main)' }}>
                My Ads
              </Button>
            </Link>
            <Link to={`/account/new-ad`}>
              <Button className="w-50" style={{ background: 'var(--color-main)' }}>
                add the new ad
              </Button>
            </Link>
          </div>

          <Profile
            firstName={user.first_name}
            lastName={user.last_name}
            city={address.city ? address.city : ''}
            country={address.country ? address.country : ''}
            phoneNumber={user.phone}
            email={user.email}
            image={user.avatar}
            street_name={address.street_name ? address.street_name : ''}
            building_number={address.building_number ? address.building_number : ''}
            extension={address.extension ? address.extension : ''}
            post_code={address.post_code ? address.post_code : ''}
          />
        </Container>
      ) : (
        <h2 className={styles.no_page}>You are logged out. Please log in.</h2>
      )}
    </>
  );
};

export default myAccountPage;
