const User = require('../../users/userModel')
const Product = require('../productModel');
const Category = require('../../categories/categoryModel');

async function createProduct(req, res) {
  try {
    const ids = [];
    const { user, title, description, price, images, condition, categories, videos, city } =
      req.body;

    for await (const category of categories)
      await Category.find({ name: category }, (err, result) => ids.push(result[0].id));

    const newProduct = new Product({
      user,
      title,
      price,
      images,
      videos,
      condition,
      description,
      categories: ids,
      city,
    });

    const saved = await newProduct.save();
    if (!saved)
      return res
        .status(400)
        .json({ success: false, message: 'Unable to save product please try later!' });

    await User.findByIdAndUpdate(user, { $push: { products: saved._id }})

    res.status(201).json({ success: true, id: saved._id });
  } catch (error) {
    res.status(500).json({ success: false, message: `An error occurred: ${error}` });
  }
};

module.exports = createProduct;
