const ProductModel = require('../productModel');

function GetProductByKeyword(req, res) {
  const name = req.params.keyword;
  
  ProductModel.find({ title: { $regex: `.*${name.toUpperCase()}.*` } })
    .limit(30)

    .populate('categories')
    .then((product) => {
      res.status(200);
      res.json(product);
    })
    .catch((err) => res.status(400).json(`Error :  ${err}`));
}

module.exports = GetProductByKeyword;
