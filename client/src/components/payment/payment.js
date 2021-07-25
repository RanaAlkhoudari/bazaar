import React from 'react';
import styles from './payment.css';
import PaymentForm from './PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
  const stripeTestPromise = loadStripe(
    'pk_test_51JEwbADmfnnMKNZBAZjVmCP4Lstr43drtcFhoDiGeGMdZLeT9u5tM3X01h783jpW6JHfcQYhpVvxLHkbIPvJ3z4N004QVluh39',
  );

  return (
    <div className={styles.paymentBox}>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Payment;
