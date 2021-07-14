const User = require('../userModel');

async function showUsers(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  const users = await User.find();
  res.status(200).send(users);
}
module.exports = showUsers;
