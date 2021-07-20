import React, { useState, useEffect } from 'react';
import notificationsStyle from './notifications.css';
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
    title: '',
    buyerName: '',
    images: [],
    date: '25-02-2020',
    text: 'Your address is changed.',
    status: 'tech',
  },
  {
    _id: '4',
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
      <div key={notification._id} className={notificationsStyle.box}>
        <div className={notificationsStyle.item}>{notification.date}</div>
        {notification.images[0] && (
          <div className={notificationsStyle.item}>
            <img src={notification.images[0]} alt={notification.title} />
          </div>
        )}
        {notification.title && <div className={notificationsStyle.item}>{notification.title}</div>}
        {notification.name && <div className={notificationsStyle.item}>{notification.name}</div>}
        <div className={notificationsStyle.message}>{notification.text}</div>
        <div className={notificationsStyle.item}>
          Status: {notification.status == 'tech' ? 'technical' : notification.status}
        </div>
      </div>
    );
  });
  return (
    <div className={notificationsStyle.cont}>
      <h2>List of notifications</h2>
      {notificationsItems}
    </div>
  );
};

export default Notifications;
