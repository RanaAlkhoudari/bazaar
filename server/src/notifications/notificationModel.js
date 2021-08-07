const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationSchema = new Schema(
  {
    type: { type: String, enum: ['order', 'payment'] },
    text: { type: String },
    seen: { type: Boolean, default: false },
  },

  { timestamps: true },
);

const Notification = mongoose.model('notification', notificationSchema);

module.exports = Notification;
