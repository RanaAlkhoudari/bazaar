const ProductModel = require('../productModel');

function getCategory(req, res) {
  ProductModel.find(req.query.category)

    .then((product) => {
      res.status(200);
      res.json(product);
    })
    .catch((err) => res.status(400).json(`Error :  ${err}`));
}

module.exports = getCategory;
