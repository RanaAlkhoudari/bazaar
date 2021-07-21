const express = require('express');
const checkout = require('./controllers/checkout');

const router = express.Router();

router.post('/checkout', checkout);

module.exports = router;
