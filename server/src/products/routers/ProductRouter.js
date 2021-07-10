import Product from '../models/products.model';

const express = require('express');

const router = express.Router();

router.get('/products/:id', (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.status(200);
      res.json(product);
    })
    .catch((err) => res.status(400).json(`Error :  ${err}`));
});

router.get('/products', (req, res) => {
  const { category } = req.query;
  Product.find({ category })
    .then((product) => {
      res.status(200);
      res.json(product);
    })
    .catch((err) => res.status(400).json(`Error :  ${err}`));
});

module.exports = router;
