//require models
const { User } = require('../models');
const bcrypt = require('bcrypt');

// Stores the data for all of our users
const userData = [
  // Each password is encrypted with bcrypt
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

// Creates and exports the function to seed the User table
const userSeed = () => User.bulkCreate(userData);

//export userSeed
module.exports = userSeed;
