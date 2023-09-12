const { Protien } = require('../models');
const protienData = [
  {
    protien_name: 'Chicken',
  },
  {
    protien_name: 'Beef',
  },
  {
    protien_name: 'Pork',
  },
  {
    protien_name: 'Fish',
  },
  {
    protien_name: 'Tofu',
  },
  {
    protien_name: 'Vegitarian',
  },
  {
    protien_name: 'Lamb',
  },
];

const seedProtien = () => Protien.bulkCreate(protienData);

module.exports = seedProtien;
