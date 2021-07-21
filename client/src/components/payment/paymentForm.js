import axios from 'axios';
import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CARD_OPTIONS = {
  iconStyle: 'solid',

  style: {
    base: {
      color: 'teal',
      fontSize: '1.2rem',
      iconColor: '#c4f0ff',
      fontFamily: 'Arial',
      fontSmoothing: 'antialiased',
      '::placeholder': { color: '#87bbfd' },
      ':-webkit-autofill': { color: '#fce883' },
    },
    invalid: {
      color: '#ffc7ee',
      iconColor: '#ffc7ee',
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
        const response = await axios.post(`${REACT_APP_API_URL}/payment`, {
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
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
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
