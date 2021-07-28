const axios = require('axios');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = require('../../utils/generateToken');

const User = require('../userModel');

async function facebookLogin(req, res) {
  const { accessToken, userID } = req.body;

  try {
    const urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
    const { data } = await axios.get(urlGraphFacebook);

    const { email, name } = data;

    const password = `${email}48922ea1149138ab02281118139f007480e1ae9c2d6e0664d9e955996e5e57e3e1c5c0188b333bbf0036dfcfcf053aff210c878513203737c93191c6830bf57a`;

    const user = await User.findOne({ email });

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        res.status(200).json({
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password,
          // token: generateToken(user._id),
        });
      } else {
        res.status(401);
        throw new Error('Invalid email or password');
      }
    } else {
      await User.create({
        first_name: name,
        last_name: name,
        email,
        password,
      });
      res.status(201).json();
    }
  } catch (error) {
    res.status(400);
    throw new Error('Something went wrong...');
  }
}

module.exports = facebookLogin;
// https://graph.facebook.com/v2.11/701303757359458/?fields=id,name,email&access_token=EAAgWLprYGd8BAL53sGnCiijy1A1xUTaBsrWizo5s0hA4RblIm8pwzF7oYVdHzv1Hif6Sl28flUY9izSeYyQY2uAyjJ8iGT0xaKeCzGGAHc0t7T8EpnYS4SFEBR3RIKPMZCXnrGWZAtLtSB3JMoqY48z3hrZBTeHhMvD5FjfBMGK2ULpfZCAcSkfjyvFW1WTs8ro0yvFX036I10naIxhT
//  User.findOne({ email }).exec((err, user) => {
//   if (err) {
//     res.status(400).json({
//       error: 'Something went wrong',
//     });
//   } else if (user) {
//     const token = jwt.sign(
//       { _id: user._id },
//       '48922ea1149138ab02281118139f007480e1ae9c2d6e0664d9e955996e5e57e3e1c5c0188b333bbf0036dfcfcf053aff210c878513203737c93191c6830bf57a',
//       { expiresIn: '7d' },
//     );
//     const { _id, email, name } = user;
//     res.json({
//       token,
//       user: { _id, email, name },
//     });
//   } else {
//     const password = `${email}48922ea1149138ab02281118139f007480e1ae9c2d6e0664d9e955996e5e57e3e1c5c0188b333bbf0036dfcfcf053aff210c878513203737c93191c6830bf57a`;
//     const nweUser = new User({ email, name, password });
//     newUser.save((err, data) => {
//       if (err) {
//         return res.status(400).json({
//           error: 'Something went wrong',
//         });
//       }
//       const token = jwt.sign(
//         { _id: user._id },
//         '48922ea1149138ab02281118139f007480e1ae9c2d6e0664d9e955996e5e57e3e1c5c0188b333bbf0036dfcfcf053aff210c878513203737c93191c6830bf57a',
//         { expiresIn: '7d' },
//       );
//       const { _id, email, name } = data;
//       res.json({
//         token,
//         user: { _id, email, name },
//       });
//     });
//   }
// });
