import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Profile from '../components/Profile';
import { AuthContext } from '../context/AuthContext';
import AdminPanel from '../components/AdminPanel';
import Orders from '../components/Orders';
import Favorites from '../components/Favorites';
import Notifications from '../components/Notifications';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Container, Alert } from 'react-bootstrap';
import { GrUserAdmin } from 'react-icons/gr';
import LoadingImage from '../images/Loading.gif';

const myAccountPage = () => {
  const styles = [
    {
      height: '25px',
      width: '25px',
      backgroundColor: '#bbb',
      color: 'white',
      borderRadius: '50%',
      display: 'inline-block',
      textAlign: 'center',
      marginLeft: '0.3rem',
    },
    {
      maxHeight: '30rem',
      overflow: 'auto',
      background: '#fff',
    },
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const { user } = useContext(AuthContext);
  const [userFromDB, setUserFromDB] = useState({});
  const [toggle, setToggle] = useState(null);

  useEffect(() => {
    fetchUser();
    console.log('Notification refreshed');
    const intervalID = setTimeout(() => {
      setToggle((toggle) => !toggle);
    }, 2000);
    return () => clearInterval(intervalID);
  }, [toggle]);

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

  return (
    <>
      <style type="text/css">
        {`
.nav-link {
  color: var(--color-grey);
    cursor: default;
}
.nav-link.active {
    font-weight:bold;
}
.nav-link:hover {
  background-color:var(--color-grey);
  color: white;
  }
    `}
      </style>
      {isLoaded && !err ? (
        <Container>
          <h1>My Account</h1>
          <Tabs justify defaultActiveKey="notifications" transition={false}>
            <Tab
              eventKey="Orders"
              style={styles[1]}
              title={
                <React.Fragment>
                  Orders
                  <span style={styles[0]}>{userFromDB.orders.length}</span>
                </React.Fragment>
              }
            >
              <Orders orders={isLoaded ? userFromDB.orders : <></>} />
            </Tab>
            <Tab
              eventKey="notifications"
              style={styles[1]}
              title={
                <React.Fragment>
                  Notifications
                  <span style={styles[0]}>{userFromDB.products.length}</span>
                </React.Fragment>
              }
            >
              <Notifications data={isLoaded ? userFromDB.products : <></>} />
            </Tab>
            <Tab
              eventKey="Favorites"
              style={styles[1]}
              title={
                <React.Fragment>
                  Favorites
                  <span style={styles[0]}>{userFromDB.favorites.length}</span>
                </React.Fragment>
              }
            >
              <Favorites orders={isLoaded ? userFromDB.favorites : <></>} />
            </Tab>
            {user.expert ? (
              <Tab
                eventKey="Admin"
                style={styles[1]}
                title={
                  <React.Fragment>
                    <GrUserAdmin style={{ marginLeft: '5px', color: 'green' }} /> Admin Panel
                    <span style={styles[0]}>{userFromDB.favorites.length}</span>
                  </React.Fragment>
                }
              >
                <AdminPanel />
              </Tab>
            ) : (
              <></>
            )}
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
