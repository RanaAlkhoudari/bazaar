const ProductModel = require('../productModel');
const CategoryModel = require('../../categories/categoryModel');

async function createProduct(req, res) {
  try {
    const categoryIds = [];
    const { title, description, price, images, condition, categories, videos } = req.body;

    for await (const category of categories) {
      await CategoryModel.find({ name: category }, (err, result) => {
        categoryIds.push(result[0].id);
      });
    }

    const newProduct = new ProductModel({
      title,
      description,
      price,
      images,
      condition,
      categories: categoryIds,
      videos,
    });

    const saved = await newProduct.save();
    if (!saved) return res.status(400).json('Unable to save product please try later');

    res.status(201).json('Product created successfully');
  } catch (error) {
    res.status(500).json(`An error occurred: ${error} `);
  }
}

module.exports = createProduct;
