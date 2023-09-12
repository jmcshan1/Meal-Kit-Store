const Product = require('./Products');
const Protien = require('./Protien');
const Style = require('./Style');
const User = require('./User');
const Order = require('./Order');

Protien.belongsTo(Product, {
  foreignKey: 'protein_id',
});

Style.belongsTo(Product, {
  foreignKey: 'style_id',
});

User.hasMany(Order, {
  foreignKey: 'order_id',
});

Order.hasOne(Product, {
  foreignKey: 'product_id',
});

module.exports = { Product, Protien, Style, User, Order };
