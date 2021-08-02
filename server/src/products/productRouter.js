const express = require('express');
const ShowProducts = require('./controllers/showProducts');
const ShowProduct = require('./controllers/showProduct');
const CreateProduct = require('./controllers/createProduct');
const GetProductByKeyword = require('./controllers/getProductByKeyword');
const UpdateProduct = require('./controllers/updateProduct');
const DeleteProduct = require('./controllers/deleteProduct');

const router = express.Router();

router.get('/', ShowProducts);
router.post('/create', CreateProduct);
router.get('/:id', ShowProduct);
router.get('/searchedProduct/:keyword', GetProductByKeyword);
router.patch('/:id', UpdateProduct);
router.delete('/:id', DeleteProduct);

module.exports = router;
