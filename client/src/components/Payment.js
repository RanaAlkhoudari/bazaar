import React from 'react';
import PaymentForm from './payment/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = ({ product }) => {
  const stripeTestPromise = loadStripe(
    'pk_test_51JEwbADmfnnMKNZBAZjVmCP4Lstr43drtcFhoDiGeGMdZLeT9u5tM3X01h783jpW6JHfcQYhpVvxLHkbIPvJ3z4N004QVluh39',
  );

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm product={product} />
    </Elements>
  );
};

export default Payment;
