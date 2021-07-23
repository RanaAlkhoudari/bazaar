const express = require('express');

const ShowOrders = require('./controllers/showOrders');
const ShowOrder = require('./controllers/showOrder');
const CreateOrder = require('./controllers/createOrder');
const DeleteOrder = require('./controllers/deleteOrder');

const router = express.Router();

router.get('/', ShowOrders);

router.get('/:id', ShowOrder);

router.post('/create', CreateOrder);

router.delete('/:id', DeleteOrder);

module.exports = router;
