const ProductModel = require('../productModel');

function showProduct(req, res) {
  ProductModel.findById(req.params.id)
    .populate('categories')
    .then((product) => {
      res.status(200);
      res.json(product);
    })
    .catch((err) => res.status(400).json(`Error :  ${err}`));
}

module.exports = showProduct;
