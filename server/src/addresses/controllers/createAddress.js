const Address = require('../addressModel');
const User = require('../../users/userModel');

const createAddress = async (req, res) => {
  try {
    const { user } = req.body;

    const newAddress = new Address(req.body);
    const saved = await newAddress.save();
    if (!saved)
      return res.status(400).json({ success: false, message: 'Failed to save address!' });

    await User.findByIdAndUpdate(user, { $push: { addresses: saved._id } });

    res.status(201).json({ success: true, address: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

module.exports = createAddress;
