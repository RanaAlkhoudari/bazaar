const express = require('express');
const ShowProducts = require('./controllers/showProducts');
const ShowProduct = require('./controllers/showProduct');
const CreateProduct = require('./controllers/createProduct');
const GetProductByKeyword = require('./controllers/getProductByKeyword');

const router = express.Router();

router.get('/', ShowProducts);
router.post('/create', CreateProduct);
router.get('/:id', ShowProduct);
router.get('/searchedProduct/:keyword', GetProductByKeyword);

module.exports = router;
