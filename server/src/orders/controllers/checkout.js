require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const Order = require('../orderModel');
const User = require('../../users/userModel');

const checkout = async (req, res) => {
  try {
    const { id, user, amount, product, address } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      confirm: true,
      currency: 'eur',
      payment_method: id,
      description: 'One time payment.',
    });

    if (payment.status !== 'succeeded')
      return res.status(400).json({ success: false, message: 'Payment failed!' });

    const newOrder = new Order({ user, product, address });
    const saved = await newOrder.save();
    // ?? should send status 400/500 (has nothing todo with the req, req body controlled in the client side!!)
    if (!saved) throw new Error('Order was not saved!');

    const added = await User.findByIdAndUpdate(user, { $push: { orders: saved._id } });
    if (!added) throw new Error('Order was not added!');

    res.status(200).json({
      success: true,
      message: 'Payment successful.',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports = checkout;
