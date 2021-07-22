import React from 'react';
import styles from './checkout.css';
import Payment from '../../components/payment/payment';

const Checkout = (prop) => {
  const product = prop.location.state;
  console.log('product', product);
  return (
    <div className={styles.checkoutWrapper}>
      <div className={styles.leftContainer}>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <Payment />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src="" />
        <h2>Seller name</h2>
      </div>
    </div>
  );
};

export default Checkout;
