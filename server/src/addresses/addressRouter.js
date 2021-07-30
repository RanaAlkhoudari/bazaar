const express = require('express');
const showAddress = require('./controllers/showAddress');
const createAddress = require('./controllers/createAddress');
const showAddresses = require('./controllers/showAddresses');

const router = express.Router();

router.get('/:id', showAddress);
router.post('/create', createAddress);
router.get('/all/:id', showAddresses);

module.exports = router;
