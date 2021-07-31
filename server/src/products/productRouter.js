const express = require('express');
const showProducts = require('./controllers/showProducts');
const showProduct = require('./controllers/showProduct');
const createProduct = require('./controllers/createProduct');
const getProductByKeyword = require('./controllers/getProductByKeyword');

const router = express.Router();

router.get('/', showProducts);
router.post('/create', createProduct);
router.get('/:id', showProduct);
router.get('/searchedProduct/:keyword', getProductByKeyword);

module.exports = router;
