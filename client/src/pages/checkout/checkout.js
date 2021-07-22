import React from 'react';
import styles from './checkout.css';
import Payment from '../../components/payment/payment';

const Checkout = (prop) => {
  const product = prop.location.state;
  console.log('product', product);
  return (
    <div className={styles.checkoutWrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.firstDiv}>
          <div className={styles.productImageContainer}>
            <img src={product.images[0]} alt="Product Image" />
          </div>
          <div>
            <h3>{product.title}</h3>
            <h5>{product.price} €</h5>
            <p>{product.description}</p>
          </div>
        </div>
        <div>
          <h3>Product Information</h3>
        </div>
        <div>
          <h3>Shipping Address</h3>
        </div>
        <div>
          <h3>Credit Card Info</h3>
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
