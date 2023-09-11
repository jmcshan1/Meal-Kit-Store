const Product = require('./Products');
const Protien = require('./Protien');
const Style = require('./Style');
const User = require('./User');
const Order = require('./Order');

// Protien.belongsTo(Product, {
//   foreignKey: 'product_id',
// });

// Style.belongsTo(Product, {
//   foreignKey: 'product_id',
// });

// // User.hasOne(Order, {
// //   foreignKey: 'product_id',
// // });

module.exports = { Product, Protien, Style, User, Order };
