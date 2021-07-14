const User = require('../userModel');

async function showUsers(req, res) {
<<<<<<< HEAD
  const users = await User.find().populate('products').populate('favorites').populate('address');
=======
<<<<<<< HEAD
  res.header('Access-Control-Allow-Origin', '*');
  const users = await User.find();
=======
  const users = await User.find().populate('products').populate('favorites').populate('address');
>>>>>>> cea6c131d8857834fff1cd4ee1c96a232e92f5a6
>>>>>>> dev
  res.status(200).send(users);
}
module.exports = showUsers;
