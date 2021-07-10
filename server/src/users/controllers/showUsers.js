const User = require('../models/user.model');

async function showUsers(req, res) {
  const users = await User.find();
  res.status(200).send(users);
}
module.exports = showUsers;
