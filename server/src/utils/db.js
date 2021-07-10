const mongoose = require('mongoose');
const createUserModel = require('../users/models/user.model');

class DbError extends Error {}

async function loadDb() {
  try {
    const db = await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    loadModels(db);

    console.log('Db connected');
    return db;
  } catch (err) {
    console.log('Db error');
    throw new DbError(err.message);
  }
}

function loadModels(db) {
  createUserModel(db);
}

exports.loadDb = loadDb;
