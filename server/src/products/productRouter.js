const express = require('express');
const ShowProducts = require('./controllers/showProducts');
const ShowProduct = require('./controllers/showProduct');
const CreateProduct = require('./controllers/createProduct');
const GetProductByKeyword = require('./controllers/getProductByKeyword');
const DeleteProduct = require('./controllers/deleteProduct');
const UpdateProduct = require('./controllers/updateProduct');

const router = express.Router();

router.get('/', ShowProducts);
router.post('/create', CreateProduct);
router.get('/:id', ShowProduct);
router.get('/searchedProduct/:keyword', GetProductByKeyword);
router.delete('/:id', DeleteProduct);
router.patch('/update/:id', UpdateProduct);

module.exports = router;
