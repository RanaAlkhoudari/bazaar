const mongoose = require('mongoose');

const { Schema } = mongoose;

const tokenSchema = new Schema({
  userId: {
    ref: 'user',
    required: true,
    type: Schema.Types.ObjectId,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 3600,
    default: Date.now,
  },
});

module.exports = mongoose.model('token', tokenSchema);
