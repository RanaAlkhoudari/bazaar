const CategoryModel = require('../categoryModel');

function showCategoryProduct(req, res) {
  CategoryModel.getBySlug({ slug: req.params.slug })
    .populate('product')
    .then((product) => {
      res.status(200);
      res.json(product);
    })
    .catch((err) => res.status(400).json(`Error :  ${err}`));
}

module.exports = showCategoryProduct;
