import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Col } from 'react-bootstrap';
import CardRow from './CardRow';

const notificationsData = [
  {
    _id: '1',
    title: 'Vauxhall Corsa',
    name: 'Ann',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '25-03-2020',
    text: 'Hello! I want to buy it!',
    verified: false,
  },
  {
    _id: '2',
    title: 'Ford Ka',
    name: 'Jon',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '13-03-2020',
    text: 'Hello! Yes, you can buy it!',
    verified: true,
  },
  {
    _id: '3',
    title: 'Dune Heeled Sandals',
    name: 'Jon',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '10-03-2020',
    text: 'The Buyer has paid. The Shipping address of the buyer: some address',
    verified: true,
  },
];

const Notifications = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.expert);

  const isExpert = (admin, isVerified) => {
    switch (isVerified) {
      case true:
        switch (admin) {
          case false:
            return <div style={{ color: 'green' }}>Hey User your Product is Verified</div>;
            break;
          case true:
            return <div style={{ color: 'green' }}>You are Admin and product is verified</div>;
            break;
        }
      case false:
        switch (admin) {
          case true:
            return <div style={{ color: 'red' }}>You are Admin Please Verify</div>;
            break;
          case false:
            return <div style={{ color: 'red' }}>Hey user please Wait for Admin to verify</div>;
            break;
        }
    }
  };

  const notificationsItems = notificationsData.map((notification) => {
    return (
      <CardRow key={notification._id}>
        <Col style={{ maxWidth: '100px', padding: '0' }}>
          <img src={notification.images[0]} alt={notification.title} style={{ width: '100px' }} />
        </Col>
        <Col>{notification.title}</Col>
        <Col style={{ textAlign: 'right' }}>{notification.date}</Col>
        <Col style={{ textAlign: 'right' }}>{isExpert(user.expert, notification.verified)}</Col>
      </CardRow>
    );
  });

  return <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>{notificationsItems}</div>;
};

export default Notifications;
