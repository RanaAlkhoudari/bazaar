const CategoryModel = require('../categoryModel');

function createCategory(req, res, next) {
  const categoryBody = req.body;
  const { name } = categoryBody;

  const newCategory = new CategoryModel({
    name,
  });
  newCategory
    .save()
    .then((saved) => {
      if (!saved) {
        return res.status(400).json('Unable to save user please try later');
      }
      return res.status(201).json('Category created successfully');
    })
    .catch((error) => res.status(500).json(`An error occurred: ${error} `).console.log(error));
}

module.exports = createCategory;
