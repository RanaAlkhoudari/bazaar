const express = require('express');
const CreateCategory = require('./controllers/createCategory');

const router = express.Router();

router.post('/create', CreateCategory);

module.exports = router;
