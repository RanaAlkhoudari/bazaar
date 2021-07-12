const AddressModel = require('../addressModel');

function createAddress(req, res, next) {
  const addressBody = req.body;

  const newAddress = new AddressModel(addressBody);
  newAddress
    .save()
    .then((saved) => {
      if (!saved) {
        return res.status(400).json('Unable to save user please try later');
      }
      return res.status(201).json('Category created successfully');
    })
    .catch((error) => res.status(500).json(`An error occurred: ${error} `).console.log(error));
}

module.exports = createAddress;
