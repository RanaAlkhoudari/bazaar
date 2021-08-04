const Address = require('../addressModel');
const User = require('../../users/userModel');

async function deleteAddress(req, res) {
  try {
    console.log('in controller', req.body);
    await Address.findByIdAndDelete(req.params.addressId);
    const user = await User.findById(req.params.userId);
    Object.assign(user, req.body);
    await user.save();
    res
      .status(200)
      .send(`Address with the id ${req.params.addressId} was deleted from the database`);
  } catch {
    res
      .status(404)
      .json(`Address with the id ${req.params.addressId} does not exist in the database`);
  }
}
module.exports = deleteAddress;
