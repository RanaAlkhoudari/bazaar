const express = require('express');
const ShowProducts = require('./controllers/showProducts');
const ShowProduct = require('./controllers/showProduct');
const CreateProduct = require('./controllers/createProduct');
const getCategory = require('./controllers/getCategory');

const router = express.Router();

router.get('/', ShowProducts);
router.post('/create', CreateProduct);
router.get('/:id', ShowProduct);
router.get('/', getCategory);

module.exports = router;
