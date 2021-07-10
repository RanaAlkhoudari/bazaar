const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/create', userController);

module.exports = router;

// function userRouter(router) {
//   /**
//    * Get list of users handler
//    */
//   router.get('/', async (req, res, next) => {
//     res.json({
//       data: [],
//     });
//   });

//   return router;
// }

// module.exports = userRouter;
