import axios from 'axios';
import styles from './checkout.css';
import React, { useEffect, useState } from 'react';
import Payment from '../../components/Payment';

const Checkout = (prop) => {
  const product = prop.location.state;

  const [seller, setSeller] = useState([]);

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
        {/* <div>
          <h3>Product Information</h3>
        </div> */}
        <div className={styles.shippingContainer}>
          <h3>Shipping Address</h3>
          <div className="row">
            <div className="col-md-6">
              <input type="text" name="first_name" placeholder="First Name" />
            </div>
            <div className="col-md-6">
              <input type="text" name="last_name" placeholder="Last Name" />
            </div>
            <div className="col-md-12">
              <input type="text" name="city" placeholder="City" />
            </div>
            <div className="col-md-4">
              <input type="text" name="post_code" placeholder="PostCode" />
            </div>
            <div className="col-md-4">
              <input type="text" name="building_number" placeholder="Building Number" />
            </div>
            <div className="col-md-4">
              <input type="text" name="extension" placeholder="Extra" />
            </div>
            <div className="col-md-12">
              <input type="text" name="street_name" placeholder="Street Name" />
            </div>
          </div>
        </div>
        <div>
          <h3>Credit Card Info</h3>
          <Payment product={product} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        {/* <img src={seller.avatar} alt="User image" /> */}
        <img
          src="https://www.tele2.nl/blog/wp-content/uploads/2020/08/facebook-avatar-maken-tips-tele2.jpg"
          alt="User image"
        />
        <h3>
          {seller.first_name} {seller.last_name}
        </h3>
      </div>
    </div>
  );
};

export default Checkout;
