const Address = require('../addressModel');
const { User } = require('../../users/userModel');

const deleteAddress = async (req, res) => {
  try {
    const deletedFromAddresses = await Address.findByIdAndDelete(req.params.addressId);
    if (!deletedFromAddresses)
      return res
        .status(400)
        .json({ success: false, message: 'Failed to delete address from addresses!' });

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(400).json({ success: false, message: 'Cannot find user!' });

    Object.assign(user, req.body);
    const deletedFromUser = await user.save();
    if (!deletedFromUser)
      return res
        .status(400)
        .json({ success: false, message: 'Failed to delete address from user!' });
    res
      .status(200)
      .send(`Address with the id ${req.params.addressId} was deleted from the database`);
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
module.exports = deleteAddress;
