const { Style } = require('../models');
const styleData = [
  {
    style_name: 'Mexican',
  },
  {
    style_name: 'Italian',
  },
  {
    style_name: 'American/continental',
  },
  {
    style_name: 'Asian',
  },
  {
    style_name: 'Seafood',
  },
  {
    style_name: 'Mediteranean',
  },
  {
    style_name: 'Vegitarian',
  },
  {
    style_name: 'Indian',
  },

];

const seedStyle = () => Style.bulkCreate(styleData);

module.exports = seedStyle;
