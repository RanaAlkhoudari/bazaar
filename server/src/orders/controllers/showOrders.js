const Order = require('../orderModel');

async function showOrders(req, res) {
  const orders = await Order.find().populate('products').populate('payment').populate('address');
  res.status(200).send(orders);
}
module.exports = showOrders;
