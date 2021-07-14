const seeder = require('mongoose-seed');

const dummyUsers = require('./dummy-files/users.json');
const dummyAddress = require('./dummy-files/addresses.json');
const dummyProducts = require('./dummy-files/products.json');
const dummyCategories = require('./dummy-files/categories.json');

seeder.connect(process.env.DB_URL, () => {
  seeder.loadModels([
    './addresses/addressModel',
    './users/userModel',
    './products/productModel',
    './categories/categoryModel',
  ]);

  seeder.clearModels(['address', 'user', 'product', 'category'], () => {
    seeder.populateModels(data, (err, done) => {
      if (err) {
        return console.log('seed error', err);
      }
      if (done) {
        return console.log('seed done', done);
      }
      seeder.disconnect();
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
