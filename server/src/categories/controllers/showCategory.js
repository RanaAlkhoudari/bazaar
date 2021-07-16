const CategoryModel = require('../categoryModel');

function showCategory(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  CategoryModel.find()
    .populate('categories')
    .then((categories) => res.json(categories))
    .catch((err) => res.status(400).json(`Error :  ${err}`));
}

module.exports = showCategory;
