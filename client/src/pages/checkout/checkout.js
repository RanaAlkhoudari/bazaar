import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './checkout.css';
import Payment from '../../components/payment/payment';

const Checkout = (prop) => {
  const product = prop.location.state;
  console.log('product: ', product);

  const [seller, setSeller] = useState([]);
  console.log('seller: ', seller);

  useEffect(() => {
    fetchSellerData();
  }, []);

  async function fetchSellerData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/users/${product.user}`);
      setSeller(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
        <img src={seller.avatar} alt="User image" />
        <h3>
          {seller.first_name} {seller.last_name}
        </h3>
      </div>
    </div>
  );
};

export default Checkout;
