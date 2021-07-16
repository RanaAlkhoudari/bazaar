const express = require('express');
const CreateCategory = require('./controllers/createCategory');
const ShowCategory = require('./controllers/showCategory');

const router = express.Router();

router.post('/create', CreateCategory);
router.get('/', ShowCategory);

module.exports = router;
