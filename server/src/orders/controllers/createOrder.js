const Order = require('../orderModel');

async function createOrder(req, res) {
  try {
    const order = await new Order(req.body); // I am not sure if you need await here!!
    const saved = await order.save();
    if (!saved) {
       return res.status(400).json('order is not saved!')
    }
    res.status(201).json('Order created successfully');
  } catch (error) {
    res.status(500).json(`An error occurred: ${error} `);
  }
}

module.exports = createOrder;
