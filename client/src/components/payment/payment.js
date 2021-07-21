import React from 'react';
import styles from './payment.css';
import PaymentForm from './PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
  const stripeTestPromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);

  return (
    <div className={styles.paymentBox}>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Payment;
