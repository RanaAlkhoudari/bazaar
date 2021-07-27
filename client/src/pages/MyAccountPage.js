import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Profile from '../components/Profile';
import { AuthContext } from '../context/AuthContext';
import Orders from '../components/Orders';
import Favorites from '../components/myAccount/Favorites';
import Notifications from '../components/myAccount/Notifications';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { Container, Alert } from 'react-bootstrap';

const myAccountPage = () => {
  const [address, setAddress] = useState({});
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

  const numOfProducts = user.products.length;
  const numOfOrders = user.orders.length;
  const numOfFavorites = user.favorites.length;
  console.log(user);
  console.log(userFromDB);
  console.log(numOfProducts);
  console.log(numOfOrders);
  console.log(numOfFavorites);

  return (
    <>
      {user ? (
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
                  <span
                    style={{
                      height: '25px',
                      width: '25px',
                      backgroundColor: '#bbb',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'inline-block',
                      textAlign: 'center',
                      marginLeft: '0.3rem',
                    }}
                  >
                    {userFromDB && <Orders orders={userFromDB.orders} />}
                  </span>
                </React.Fragment>
              }
            >
              <Orders />
            </Tab>
            <Tab
              label={
                <React.Fragment>
                  Notifications
                  <span
                    style={{
                      height: '25px',
                      width: '25px',
                      backgroundColor: '#bbb',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'inline-block',
                      textAlign: 'center',
                      marginLeft: '0.3rem',
                    }}
                  >
                    {numOfProducts}
                  </span>
                </React.Fragment>
              }
            >
              <Notifications />
            </Tab>
            <Tab
              label={
                <React.Fragment>
                  Favorites
                  <span
                    style={{
                      height: '25px',
                      width: '25px',
                      backgroundColor: '#bbb',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'inline-block',
                      textAlign: 'center',
                      marginLeft: '0.3rem',
                    }}
                  >
                    {numOfFavorites}
                  </span>
                </React.Fragment>
              }
            >
              <Favorites />
            </Tab>
          </Tabs>
          <hr />
          <Profile
            firstName={user.first_name}
            lastName={user.last_name}
            city={address.city ? address.city : ''}
            country={address.country ? address.country : ''}
            phoneNumber={user.phone}
            email={user.email}
            image={user.avatar}
            streetName={address.street_name ? address.street_name : ''}
            buildingNumber={address.building_number ? address.building_number : ''}
            extension={address.extension ? address.extension : ''}
            postcode={address.post_code ? address.post_code : ''}
          />
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
