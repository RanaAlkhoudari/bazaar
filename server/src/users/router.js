function userRouter(router) {
  /**
   * Get list of users handler
   */
  router.get('/', async (req, res, next) => {
    res.json({
      data: []
    });
  });

  return router;
}

module.exports = userRouter;
