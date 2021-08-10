const { User } = require('../userModel');

async function showUsers(req, res) {
  const users = await User.find()
    .populate('orders')
    .populate('products')
    .populate('favorites')
    .populate('address')
    .populate('notifications');
  res.status(200).send(users);
}
module.exports = showUsers;
