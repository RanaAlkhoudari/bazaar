const express = require('express');
const CreateAddress = require('./controllers/createAddress');
const ShowAddress = require('./controllers/showAddress');
const showAddresses = require('./controllers/showAddresses');

const router = express.Router();

router.post('/create', CreateAddress);
router.get('/:id', ShowAddress);
router.get('/all/:id', showAddresses);

module.exports = router;
