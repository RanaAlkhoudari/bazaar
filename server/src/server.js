const express = require('express');
const cors = require('cors');

const { loadDb } = require('./db');
const { handleErrors } = require('./middlewares/errors');
const userRouter = require('./users/userRouter');
const productRouter = require('./products/productRouter');
const categoryRouter = require('./categories/categoryRouter');
const addressRouter = require('./addresses/addressRouter');
const orderRouter = require('./orders/orderRouter');

const app = express();
app.use(cors());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

async function run() {
  await loadDb();

  // Middlewares
  // app.use(loadRepositories(db));
  app.use(express.json());

  // Route middlewares
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/products', productRouter);
  app.use('/api/v1/categories', categoryRouter);
  app.use('/api/v1/addresses', addressRouter);
  app.use('/api/v1/orders', orderRouter);
  // handleErrors must be the last middleware
  app.use(handleErrors);

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  });
}

run();
