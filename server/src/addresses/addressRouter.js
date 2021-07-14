const express = require('express');
const CreateAddress = require('./controllers/createAddress');

const router = express.Router();

router.post('/create', CreateAddress);

module.exports = router;
