const Category = require('../categoryModel');

async function showCategoryProducts(req, res) {
  try {
    const categoryProducts = await Category.findById(req.params.id).populate('products');
    res.status(200).send(categoryProducts);
  } catch {
    res.status(404).json(`Category with the id ${req.params.id} does not exist in the database`);
  }
}
module.exports = showCategoryProducts;
