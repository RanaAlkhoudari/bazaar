const stripe = require('stripe')(
  'sk_test_51JEwbADmfnnMKNZBbws10pOAKU5H4vcRwjrYIbI7UR7YvvT559KEap0Ie7vaAN3gGmAfDRHaumk4WDlMRIIzB4TL000NaugjPa',
);

const checkout = async (req, res) => {
  const { amount, id } = req.body;

  try {
    await stripe.paymentIntents.create({
      amount,
      confirm: true,
      currency: 'eur',
      payment_method: id,
      description: 'One time payment.',
    });
    res.status(200).json({
      success: true,
      message: 'Payment successful.',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Payment failed!',
    });
  }
};

module.exports = checkout;
