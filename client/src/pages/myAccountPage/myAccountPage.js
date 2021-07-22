import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Orders from '../../components/myAccount/orders';
import Favorites from '../../components/myAccount/favorites';
import Notifications from '../../components/myAccount/notifications';
import Profile from '../../components/myAccount/profile';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { Container, Button } from 'react-bootstrap';

function myAccountPage() {
  const { user } = useContext(AuthContext);
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
          <Profile />
        </Container>
      ) : (
        <div>You are logged out. Please log in.</div>
      )}
    </>
  );
}
export default myAccountPage;
