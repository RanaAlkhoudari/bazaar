const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false },
    password: {
      type: String,
      min: 6,
      required: true,
      set(value) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);
        return hash;
      },
    },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    active: { type: Boolean },
    expert: { type: Boolean, default: false },
    avatar: { type: String, required: false, default: null },
    orders: [{ type: Schema.Types.ObjectId, ref: 'order' }],
    addresses: [{ type: Schema.Types.ObjectId, ref: 'address' }],
    favorites: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    notifications: [{ type: Schema.Types.ObjectId, ref: 'notification' }],
  },

  { timestamps: true },
);

const User = mongoose.model('user', userSchema);

const validate = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};

module.exports = { User, validate };
