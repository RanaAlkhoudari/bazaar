const jwt = require('jsonwebtoken');

const generateToken = (id) =>
  jwt.sign(
    { id },
    '48922ea1149138ab02281118139f007480e1ae9c2d6e0664d9e955996e5e57e3e1c5c0188b333bbf0036dfcfcf053aff210c878513203737c93191c6830bf57a',
    {
      expiresIn: '30d',
    },
  );
module.exports = generateToken;
