const NotificationModel = require('../notificationModel');

async function updateNotification(req, res) {
  try {
    const update = { 'seen': true };
    const options = { new: true };
    const result = await NotificationModel.findByIdAndUpdate(req.params.id, update, options);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json(`Error : ${error}`);
  }
}

module.exports = updateNotification;
