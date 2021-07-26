import React, { useState, useEffect } from 'react';
import ordersStyle from './orders.css';
const ordersData = [
  {
    _id: '1',
    title: 'Vauxhall Corsa',
    price: '10000.00',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '25-03-2020',
  },
  {
    _id: '2',
    title: 'Ford Ka',
    price: '6000.00',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '20-04-2021',
  },
  {
    _id: '3',
    title: 'Dune Heeled Sandals',
    price: '38.00',
    images: ['https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'],
    date: '12-05-2021',
  },
];
const Orders = () => {
  const ordersItems = ordersData.map((order) => {
    return (
      <div key={order._id} className={ordersStyle.box}>
        <div className={ordersStyle.item}>{order.date}</div>
        <div className={ordersStyle.item}>
          <img src={order.images[0]} alt={order.title} />
        </div>
        <div className={ordersStyle.item}>{order.title}</div>
        <div className={ordersStyle.item}>{order.price}</div>
      </div>
    );
  });
  return <div className={ordersStyle.cont}>{ordersItems}</div>;
};

export default Orders;
