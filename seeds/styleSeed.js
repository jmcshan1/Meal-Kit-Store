const { Style } = require('../models');

// Stores the data for all of the different styles of meals
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

//create and export function
const seedStyle = () => Style.bulkCreate(styleData);

//export seedStyle
module.exports = seedStyle;
