import React from 'react';
import { Col } from 'react-bootstrap';
import CardRow from '../CardRow';

const notificationsData = [
  {
    _id: '1',
    title: 'Vauxhall Corsa',
    name: 'Ann',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '25-03-2020',
    text: 'Hello! I want to buy it!',
    status: 'buyer',
  },
  {
    _id: '2',
    title: 'Ford Ka',
    name: 'Jon',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '13-03-2020',
    text: 'Hello! Yes, you can buy it!',
    status: 'seller',
  },
  {
    _id: '3',
    title: 'Dune Heeled Sandals',
    name: 'Jon',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '10-03-2020',
    text: 'The Buyer has paid. The Shipping address of the buyer: some address',
    status: 'paid',
  },
];

const Notifications = () => {
  const notificationsItems = notificationsData.map((notification) => {
    return (
      <CardRow key={notification._id}>
        <Col style={{ maxWidth: '100px', padding: '0' }}>
          <img width={100} src={notification.images[0]} alt={notification.title} />
        </Col>
        {notification.title && <Col>{notification.title}</Col>}
        {notification.name && <Col>{notification.name}</Col>}
        <Col>{notification.message}</Col>
        <Col>Status: {notification.status == 'tech' ? 'technical' : notification.status}</Col>
      </CardRow>
    );
  });
  return <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>{notificationsItems}</div>;
};

export default Notifications;
