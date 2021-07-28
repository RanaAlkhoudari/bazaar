const ProductModel = require('../productModel');

async function showProduct(req, res) {
  try {
    const update = {'verified': true};
    const options = {new: true}
    const result = await ProductModel.findByIdAndUpdate(req.params.id, update, options);
    res.status(200).send(result)
  } catch (error)  {
    res.status(400).json(`Error : ${error}`);
  }
}

module.exports = showProduct;
