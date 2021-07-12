const User = require('../userModel');

async function showUsers(req, res) {
  const users = await User.find();
  res.status(200).send(users);
}
module.exports = showUsers;
