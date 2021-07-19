const ProductModel = require('../productModel');

function createProduct(req, res, next) {
  const productBody = req.body;
  const { title, description, price, images, condition, categories, videos } = productBody;

  const newProduct = new ProductModel({
    title,
    description,
    price: Number(price),
    images,
    condition,
    categories,
    videos,
  });
  newProduct
    .save()
    .then((saved) => {
      if (!saved) {
        return res.status(400).json('Unable to save user please try later');
      }
      return res.status(201).json('Product created successfully');
    })
    .catch((error) => res.status(500).json(`An error occurred: ${error} `));
}

module.exports = createProduct;
