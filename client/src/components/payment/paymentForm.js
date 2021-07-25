import axios from 'axios';
import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import styles from './payment.css';

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

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/orders/checkout`, {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log('Successful payment');
          setSuccess(true);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    } else {
      console.error(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form className={styles.checkout_form} onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className={styles.checkout_button}>Pay now</button>
        </form>
      ) : (
        <div>
          <h2>Thank you!</h2>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
