const ProductModel = require('../productModel');

function showProducts(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');

  try {
    const products = await ProductModel.find().populate('categories');

    res.status(200);
    res.json(products);
  } catch (error) {
    console.log('Error while showing products');
    console.log('Request', req);
    console.log('Error', error);

    res.status(500).json(`Could not show products`);
  }
}

module.exports = showProducts;
