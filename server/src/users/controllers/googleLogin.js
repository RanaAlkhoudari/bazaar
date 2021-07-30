const pkg = require('google-auth-library');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('../userModel');

const { OAuth2Client } = pkg;

async function authUserGoogle(req, res) {
  const tokenId = req.body.userID;
  try {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const { payload } = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    console.log(payload);
    const { email_verified, name, email, given_name, picture } = payload;
    const password = uuidv4(); //We used uuid because we dont need password, but just email.
    const user = await User.findOne({ email }); //We search user according to email not password.

    if (email_verified) {
      if (user) {
        if (password) {
          res.status(200).json(user);
        } else {
          res.status(401);
          throw new Error('Invalid email or password');
        }
      } else {
        const newUser = await User.create({
          first_name: name,
          last_name: given_name,
          email,
          password,
          avatar: picture,
        });
        res.status(201).json(newUser);
      }
    } else {
      res.status(400);
      throw new Error('Email address not verified');
    }
  } catch (error) {
    res.status(400);
    throw new Error('Something went wrong...');
  }
}
module.exports = authUserGoogle;
