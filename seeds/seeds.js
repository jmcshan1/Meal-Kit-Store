//seeds index file for executing all seeds
//required dependencies
const sequelize = require('../config/connection');
const productSeed = require('./productSeed');
const protientSeed = require('./protienSeed');
const userSeed = require('./userSeed');
const styleSeed = require('./styleSeed');
const orderSeed = require('./orderSeed');

//execute seeds
const seedAll = async () => {
  //delete all tables and force reseed
  await sequelize.sync({ force: true });

  await protientSeed();

  await styleSeed();

  await productSeed();

  await userSeed();

  await orderSeed();

  process.exit(0);
};

//call seedAll function
seedAll();
