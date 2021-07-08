const express = require('express');

import Product from '../models/products.model';

const router = express.Router();

router.get('/products/:id', (req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error :  ${err}`));
});

router.get('/products', (req, res) => {
  Product.find(req.query)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error :  ${err}`));
});

module.exports = router;
