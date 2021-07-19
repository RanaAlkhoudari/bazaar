const express = require('express');
const createPayment = require('./controllers/createPayment');

const router = express.Router();

router.post('/', createPayment);

module.exports = router;
