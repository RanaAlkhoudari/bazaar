const express = require('express');
const { loadDb } = require('./utils/db');
const { loadRepositories } = require('./middlewares/repositories');
const { handleErrors } = require('./middlewares/errors');
const userRouter = require('./users/routers/UserRouter');

const app = express();

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

async function run() {
  const db = await loadDb();

  // Middlewares
  app.use(loadRepositories(db));
  app.use(express.json());

  // Route middlewares
  app.use('/api/v1/users', userRouter);
  // handleErrors must be the last middleware
  app.use(handleErrors);

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  });
}

run();
