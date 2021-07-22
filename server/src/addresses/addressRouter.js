const express = require('express');
const CreateAddress = require('./controllers/createAddress');
const ShowAddress = require('./controllers/showAddress');

const router = express.Router();

router.post('/create', CreateAddress);
router.get('/:id', ShowAddress);

module.exports = router;
