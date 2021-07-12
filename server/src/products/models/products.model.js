const mongoose = require('mongoose');
const categorySchema = require('../../category/category.model');

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    image: { type: Array, required: false },
    condition: { type: String, required: true },
    category: categorySchema,
    video: { type: Array, required: false },
    created_at: { type: Date, required: true, default: Date.now },
  },
  { timestamps: { createdAt: 'created_at' } },
);

module.exports = productSchema;
