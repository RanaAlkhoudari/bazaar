import axios from 'axios';
// import styles from './payment.css';
import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Form, Alert, Button } from 'react-bootstrap';

const CARD_OPTIONS = {
  iconStyle: 'solid',

  style: {
    base: {
      color: '#32325d',
      fontSize: '1.2rem',
      iconColor: '#32325d',
      fontFamily: 'Arial',
      fontSmoothing: 'antialiased',
      '::placeholder': { color: '#cccccc' },
      ':-webkit-autofill': { color: '#fce883' },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const PaymentForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/orders/checkout`, {
          id,
          user: product.user,
          product: product.id,
          amount: product.price,
        });

        if (response.data.success) setSuccess(true);
      } catch (error) {
        console.error(`Error ${error}`);
      }
    } else {
      console.error(error.message);
    }

    setLoading(false);
  };

  /**
 * <Form onSubmit={handleSubmit}>
          <Form.Group>
            <CardElement options={CARD_OPTIONS} />
          </Form.Group>
          <Button type="submit" style={{ background: 'var(--color-main)' }}>
            Pay now
          </Button>
        </Form>
 */

  return (
    <>
      {!success ? (
        <Form onSubmit={handleSubmit}>
          <CardElement options={CARD_OPTIONS} />
          <Button
            disabled={loading}
            type="submit"
            style={{ paddingTop: '2px', width: '100%', background: 'var(--color-main)' }}
          >
            Pay now
          </Button>
        </Form>
      ) : (
        <Alert variant="success">Thank you!</Alert>
      )}
    </>
  );
};

export default PaymentForm;
