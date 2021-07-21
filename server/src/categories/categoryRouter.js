const express = require('express');
const CreateCategory = require('./controllers/createCategory');
const ShowCategory = require('./controllers/showCategory');
const ShowCategoryProducts = require('./controllers/showCategoryProducts');

const router = express.Router();

router.post('/create', CreateCategory);
router.get('/', ShowCategory);
router.get('/:id/products', ShowCategoryProducts);

module.exports = router;
