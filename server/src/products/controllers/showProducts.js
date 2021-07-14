const ProductModel = require('../productModel');

function showProducts(req, res, next) {
  ProductModel.find()
    .populate('categories')
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(`Error :  ${err}`));
}

module.exports = showProducts;
