const sequelize = require('../config/connection');
const productSeed = require('./productSeed');
const protientSeed = require('./protienSeed');
const userSeed = require('./userSeed');
const styleSeed = require('./styleSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await productSeed();

  await protientSeed();

  await userSeed();

  await styleSeed();

  process.exit(0);
};

seedAll();
