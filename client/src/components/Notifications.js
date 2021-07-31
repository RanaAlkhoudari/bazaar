import React from 'react';
import { Col } from 'react-bootstrap';
import NotifyIcon from './NotifyIcon';
import CardRow from './CardRow';
import { TiThumbsOk, TiThumbsDown } from 'react-icons/ti';
import { MdCached } from 'react-icons/md';

<TiThumbsOk style={{ marginLeft: '5px' }} />;

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
        <Col style={{ textAlign: 'right' }}>
          <NotifyIcon product={notification.verified} />
        </Col>
      </CardRow>
    );
  });
  return <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>{notificationsItems}</div>;
};

export default Notifications;
