const express = require('express');

const addNotification = require('./controllers/addNotification');
const deleteNotification = require('./controllers/deleteNotification');
const updateNotification = require('./controllers/updateNotification');

const router = express.Router();

router.post('/add', addNotification);
router.delete('/:id', deleteNotification);
router.patch('/:id', updateNotification);

module.exports = router;
