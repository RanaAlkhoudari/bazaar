const express = require('express');
const cors = require('cors');
const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const User = require('./users/userModel');

const { loadDb } = require('./db');
const { handleErrors } = require('./middlewares/errors');
const userRouter = require('./users/userRouter');
const productRouter = require('./products/productRouter');
const categoryRouter = require('./categories/categoryRouter');
const addressRouter = require('./addresses/addressRouter');
const orderRouter = require('./orders/orderRouter');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: '600011110983694',
//       clientSecret: 'e57394168ee6e24417cadf042d357331',
//       callbackURL: 'http://localhost:3000/auth/facebook/callback',
//       profileFields: ['email', 'name'],
//     },
//     // (accessToken, refreshToken, profile, cb) => {
//     //   User.findOrCreate({ facebookId: profile.id }, (err, user) => cb(err, user));
//     // (accessToken, refreshToken, profile, done) => done(null, profile),
//     (accessToken, refreshToken, profile, done) => {
//       // Check the DB to find a User with the profile.id
//       User.findOne({ facebook_id: profile.id }, (err, user) => {
//         // See if a User already exists with the Facebook ID
//         if (err) {
//           console.log(err); // handle errors!
//         }

//         if (user) {
//           done(null, user); // If User already exists login as stated on line 10 return User
//         } else {
//           // else create a new User
//           user = new User({
//             facebook_id: profile.id, // pass in the id and displayName params from Facebook
//             name: profile.displayName,
//           });
//           user.save((err) => {
//             // Save User if there are no errors else redirect to login route
//             if (err) {
//               console.log(err); // handle errors!
//             } else {
//               console.log('saving user ...');
//               done(null, user);
//             }
//           });
//         }
//       });
//     },
//   ),
// );

// // app.get('/auth/facebook', passport.authenticate('facebook'));

// app.get(
//   '/signin/facebook',
//   passport.authenticate('facebook', {
//     scope: ['public_profile', 'email'],
//   }),
// );

// app.get(
//   '/signin/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/signin' }),
//   (req, res) => {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   },
// );

async function run() {
  await loadDb();

  // Middlewares
  // app.use(loadRepositories(db));
  app.use(express.json());

  // Route middlewares
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/products', productRouter);
  app.use('/api/v1/categories', categoryRouter);
  app.use('/api/v1/addresses', addressRouter);
  app.use('/api/v1/orders', orderRouter);
  // handleErrors must be the last middleware
  app.use(handleErrors);

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  });
}

run();
