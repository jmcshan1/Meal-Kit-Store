const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'kbliss',
    password: bcrypt.hashSync('Password123', 10),
  },
  {
    username: 'eissamonet',
    password: bcrypt.hashSync('Password123', 10),
  },
  {
    username: 'jmcshan1',
    password: bcrypt.hashSync('Password123', 10),
  },
];

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;
