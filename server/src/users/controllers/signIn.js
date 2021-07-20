// const express = require('express');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const router = express.Router();
// const authorize = require('../../middlewares/auth');
const User = require('../userModel');

// const signIn = (req, res, next) => {
//   let getUser;
//   User.findOne({
//     email: req.body.email,
//   })
//     .then((user) => {
//       if (!user) {
//         throw new Error('No user with that email');
//       }
//       getUser = user;

//       return bcrypt.compare(req.body.password, user.password);
//     })
//     .then((response) => {
//       if (!response) {
//         return res.status(401).json({
//           message: 'Authentication - failed',
//         });
//       }

//       let payload = {
//         user: {
//           email: getUser.email,
//           userId: getUser._id,
//         },
//       };

//       let jwtToken = jwt.sign(payload, 'longer-secret-is-better', {
//         expiresIn: '1h',
//       });
//       res.status(200).json({
//         token: jwtToken,
//         expiresIn: 3600,
//         msg: getUser,
//       });
//     })
//     .catch(() => {
//       res.status(401).json({
//         message: 'Authentication failed',
//       });
//     });
// };

// module.exports = signIn;

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json(`Please provide an email to login!`);
  if (!password) return res.status(400).json(`Please provide a password to login!`);

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json(`No account associated with this email!`);

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json(`Invalid password!`);

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = login;
