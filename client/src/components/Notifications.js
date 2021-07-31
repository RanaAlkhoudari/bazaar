import React from 'react';
import { Col } from 'react-bootstrap';
import CardRow from './CardRow';
import { TiThumbsOk, TiThumbsDown } from 'react-icons/ti';
import { MdCached } from 'react-icons/md';

<TiThumbsOk style={{ marginLeft: '5px' }} />;

const notificationIcon = (product) => {
  switch (product) {
    case true:
      return (
        <div>
          <span style={{ color: 'green', height: '3em', fontWeight: 'bold' }}>Recommended</span>
          <TiThumbsOk size="3em" color="green" style={{ marginLeft: '5px' }} />
        </div>
      );
    case false:
      return (
        <div>
          <span style={{ color: 'red', height: '3em', fontWeight: 'bold' }}>Not recommended</span>
          <TiThumbsDown size="3em" color="red" style={{ marginLeft: '5px' }} />
        </div>
      );
    case null:
      return (
        <div>
          <span style={{ color: 'blue', height: '3em', fontWeight: 'bold' }}>
            Pending to Verify
          </span>
          <MdCached size="3em" color="blue" style={{ marginLeft: '5px' }} />
        </div>
      );
  }
};

const Notifications = ({ data }) => {
  // console.log(data);

  const notificationsItems = data.map((notification) => {
    return (
      <CardRow key={notification._id}>
        <Col style={{ maxWidth: '100px', padding: '0' }}>
          <img src={notification.images[0]} alt={notification.title} style={{ width: '100px' }} />
        </Col>
        <Col>
          <span style={{ height: '3em', fontWeight: 'bold' }}> {notification.title}</span>
        </Col>
        <Col style={{ textAlign: 'left' }}>
          <span style={{ height: '3em', fontWeight: 'bold' }}>Price : {notification.price} €</span>
        </Col>
        <Col style={{ textAlign: 'right' }}>{notificationIcon(notification.verified)}</Col>
      </CardRow>
    );
  });
  return <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>{notificationsItems}</div>;
};

export default Notifications;
