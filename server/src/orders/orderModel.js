const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    product: { type: String, required:true },
    payment: { type: Schema.Types.ObjectId, ref: 'product' },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    address: { type: Schema.Types.ObjectId, ref: 'address' },
    amount: { type: String, required: true },
    status: { type: String, required: true },
  },

  { timestamps: true },
);

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
