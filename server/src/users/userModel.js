// const UserModel = (db) => {
//   const userSchema = new db.Schema({} });
//   return db.model('User', userSchema);
// };

// module.exports = UserModel;

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const productSchema = require('../products/models/products.model');
const addressSchema = require('../address/address.model');

const userSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    active: { type: Boolean },
    avatar: { type: String, required: false },
    order: { type: Array, required: false },
    address: addressSchema,
    favorite: { type: Array, required: false },
    products: [productSchema],
    created_at: { type: Date, required: true, default: Date.now },
  },
  { timestamps: { createdAt: 'created_at' } },
);

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
