const { User } = require('../../users/userModel')
const Product = require('../productModel');

async function createProduct(req, res) {
  try {
    const { city, user, title, description, price, images, condition, categories, videos } =
      req.body;

    const newProduct = new Product({
      city,
      user,
      title,
      price,
      images,
      videos,
      condition,
      categories,
      description,
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
