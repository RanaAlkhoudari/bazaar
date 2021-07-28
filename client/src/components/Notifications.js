import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Col } from 'react-bootstrap';
import CardRow from './CardRow';
import Button from 'react-bootstrap/Button';
import { FcCancel, FcCheckmark } from 'react-icons/fc';

const Notifications = ({ data }) => {
  const { user } = useContext(AuthContext);

  const isExpert = (admin, isVerified) => {
    switch (isVerified) {
      case true:
        switch (admin) {
          case false:
            return (
              <div style={{ color: 'green' }}>Hi {user.first_name} your Product is verified</div>
            );
            break;
          case true:
            return (
              <div style={{ color: 'green' }}>Hi {user.first_name} your Product is Verified</div>
            );
            break;
        }
      case false:
        switch (admin) {
          case true:
            return (
              <div style={{ color: 'red' }}>
                <Button style={{ backgroundColor: 'white', color: 'black', margin: '0 10px' }}>
                  Accept
                  <FcCheckmark style={{ marginLeft: '5px' }} />
                </Button>
                <Button style={{ backgroundColor: 'white', color: 'black' }}>
                  Decline
                  <FcCancel style={{ marginLeft: '5px' }} />
                </Button>
              </div>
            );
            break;
          case false:
            return (
              <div style={{ color: 'red' }}>
                Hey {user.first_name} please Wait for Admin to verify
              </div>
            );
            break;
        }
    }
  };

  const notificationsItems = data.map((notification) => {
    return (
      <CardRow key={notification._id}>
        <Col style={{ maxWidth: '100px', padding: '0' }}>
          <img src={notification.images[0]} alt={notification.title} style={{ width: '100px' }} />
        </Col>
        <Col>{notification.title}</Col>
        <Col style={{ textAlign: 'left' }}>Price : {notification.price}€</Col>
        <Col style={{ textAlign: 'center' }}>{isExpert(user.expert, notification.verified)}</Col>
      </CardRow>
    );
  });

  return <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>{notificationsItems}</div>;
};

export default Notifications;
