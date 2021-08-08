const Notification = require('../notificationModel');

async function deleteNotification(req, res) {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.status(200).send(`Notification with the id ${req.params.id} was deleted from the database`);
  } catch {
    res.status(404).json(`Notification with the id ${req.params.id} does not exist in the database`);
  }
}
module.exports = deleteNotification;
