const UserModel = require('../models/user.model');

async function createUser(req, res, next) {
  const userBody = req.body;
  const newUser = new UserModel(userBody);
  newUser
    .save()
    .then((saved) => {
      if (!saved) {
        return res.status(400).json('Unable to save user please try later');
      }
      return res.status(201).json('User created successfully');
    })
    .catch((error) => res.status(500).json(`An error occurred: ${error} `).console.log(error));
}

module.exports = createUser;
