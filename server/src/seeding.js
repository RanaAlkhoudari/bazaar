const seeder = require('mongoose-seed');

const dummyUsers = require('./dummy-files/users.json');
const dummyAddress = require('./dummy-files/addresses.json');
const dummyProducts = require('./dummy-files/products.json');
const dummyCategories = require('./dummy-files/categories.json');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
console.log(process.env.DB_URL);

seeder.connect(process.env.DB_URL, () => {
  seeder.loadModels([
    './src/addresses/addressModel',
    './src/users/userModel',
    './src/products/productModel',
    './src/categories/categoryModel',
  ]);

  seeder.clearModels(['address', 'user', 'product', 'category'], () => {
    seeder.populateModels(data, (err, done) => {
      if (err) {
        return console.log('seed error', err);
      }
      if (done) {
        return console.log('seed done', done);
      }
      return seeder.disconnect();
    });
  });
});

const data = [
  {
    model: 'address',
    documents: dummyAddress,
  },
  {
    model: 'user',
    documents: dummyUsers,
  },

  {
    model: 'product',
    documents: dummyProducts,
  },
  {
    model: 'category',
    documents: dummyCategories,
  },
];
