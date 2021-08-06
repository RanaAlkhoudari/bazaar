const ProductModel = require('../productModel');

async function GetProductByKeyword(req, res) {
  const name = req.params.keyword.toLowerCase();
  if (name) {
    console.log(name);
  }
  // const lowerCaseName = req.params.keyword.

  try {
    const product = await ProductModel.find({ title: { $regex: `.*${name}.*` } })
      .limit(30)
      .populate('categories');
    // if (product) {
    //   console.log(product[0].title.toLowerCase());
    // }

    res.status(200);
    res.json(product);
  } catch (error) {
    console.log('Error while getting product by keyword');
    console.log('Request', req);
    console.log('Error', error);

    res.status(500).json(`Could not get product`);
  }
}

module.exports = GetProductByKeyword;
