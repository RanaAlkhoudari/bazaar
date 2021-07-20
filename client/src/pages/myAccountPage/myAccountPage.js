import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from '../../components/myAccount/orders';
import Favorites from '../../components/myAccount/favorites';
import Notifications from '../../components/myAccount/notifications';
import Profile from '../../components/myAccount/profile';
import Tabs from '../../components/myAccount/Tabs';

const tabsData = [
  {
    heading: 'orders',
    body: <Orders />,
  },
  {
    heading: 'notifications',
    body: <Notifications />,
  },
  {
    heading: 'favorites',
    body: <Favorites />,
  },
];
function myAccountPage() {
  return (
    <>
      <h1>My Account</h1>
      <Tabs tabsData={tabsData} />
      <Profile />
    </>
  );
}
export default myAccountPage;
