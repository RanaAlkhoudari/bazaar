const express = require('express');
// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const User = require('./userModel');

const ShowUsers = require('./controllers/showUsers');
const ShowUser = require('./controllers/showUser');
const CreateUser = require('./controllers/createUser');
const UpdateUser = require('./controllers/updateUser');
const DeleteUser = require('./controllers/deleteUser');
const SingIn = require('./controllers/signIn');
const facebookLogin = require('./controllers/facebookLogin');
const AuthUserGoogle = require('./controllers/googleLogin');

const router = express.Router();

// router.get(
//   '/signin/facebook',
//   passport.authenticate('facebook', {
//     scope: ['public_profile', 'email'],
//   }),
// );

// router.get(
//   '/signin/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/signin' }),
//   (req, res) => {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   },
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: '600011110983694',
//       clientSecret: 'e57394168ee6e24417cadf042d357331',
//       callbackURL: 'http://localhost:3000/facebook/callback',
//       profileFields: ['email', 'name'],
//       passReqToCallback: true,
//     },
//     // (accessToken, refreshToken, profile, cb) => {
//     //   User.findOrCreate({ facebookId: profile.id }, (err, user) => cb(err, user));
//     // (accessToken, refreshToken, profile, done) => done(null, profile),
//     // (accessToken, refreshToken, profile, done) => {
//     //   // Check the DB to find a User with the profile.id
//     //   User.findOne({ facebook_id: profile.id }, (err, user) => {
//     //     // See if a User already exists with the Facebook ID
//     //     if (err) {
//     //       console.log(err); // handle errors!
//     //     }

//     //     if (user) {
//     //       done(null, user); // If User already exists login as stated on line 10 return User
//     //     } else {
//     //       // else create a new User
//     //       user = new User({
//     //         facebook_id: profile.id, // pass in the id and displayName params from Facebook
//     //         name: profile.displayName,
//     //       });
//     //       user.save((err) => {
//     //         // Save User if there are no errors else redirect to login route
//     //         if (err) {
//     //           console.log(err); // handle errors!
//     //         } else {
//     //           console.log('saving user ...');
//     //           done(null, user);
//     //         }
//     //       });
//     //     }
//     //   });
//     // },
//     (accessToken, refreshToken, profile, done) => {
//       process.nextTick(() => {
//         User.findOne({ 'facebook.id': profile.id }, (err, user) => {
//           if (err) return done(err);
//           if (user) return done(null, user);

//           const newUser = new User();
//           newUser.facebook.id = profile.id;
//           newUser.facebook.token = accessToken;
//           newUser.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`;
//           newUser.facebook.email = profile.emails[0].value;

//           newUser.save((error) => {
//             if (error) throw error;
//             return done(null, newUser);
//           });
//           console.log(profile);
//         });
//       });
//     },
//   ),
// );

// passport.serializeUser((user, cb) => {
//   cb(null, user);
// });
// passport.deserializeUser((obj, cb) => {
//   cb(null, obj);
// });

// app.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/', ShowUsers);

router.get('/:id', ShowUser);

router.post('/signup', CreateUser);

router.patch('/update/:id', UpdateUser);

router.delete('/:id', DeleteUser);

router.post('/signin', SingIn);

router.post('/facebooklogin', facebookLogin);
router.post('/googleLogin', AuthUserGoogle);

module.exports = router;
