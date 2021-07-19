const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

const createPayment = async (req, res) => {
  const { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'EUR',
      description: 'Bazzar',
      payment_method: id,
      confirm: true,
    });
    res.status(200).json({
      message: 'Payment successful.',
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Payment failed!',
      success: false,
    });
  }
};

module.exports = createPayment;
