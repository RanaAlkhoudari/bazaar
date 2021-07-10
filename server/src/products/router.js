function productRouter(router) {

    router.get('/:category', async (req, res, next) => {
      Product.find({ category: req.params.category })
        .limit(30)
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json('Error: ' + err));
    });
  ​
    return router;
  }
  ​
  module.exports = productRouter;