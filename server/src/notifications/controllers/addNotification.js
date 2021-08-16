const Notification = require('../notificationModel');
const { User } = require('../../users/userModel');

const addNotification = async (req, res) => {
  try {
    const { user } = req.body;

    const newNotification = new Notification(req.body);
    const saved = await newNotification.save();

    if (!saved)
    return res
      .status(400)
      .json({ success: false, message: 'Unable to add the notification !!!' });

    await User.findByIdAndUpdate(user, { $push: { notifications: saved._id } });

    res.status(201).json({ success: true, notification: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

module.exports = addNotification;
