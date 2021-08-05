const express = require('express');

const AddNotification = require('./controllers/addNotification');
const DeleteNotification = require('./controllers/deleteNotification');
const updateNotification = require('./controllers/updateNotification');

const router = express.Router();

router.post('/add', AddNotification);
router.delete('/:id', DeleteNotification);
router.patch('/:id', updateNotification);

module.exports = router;
