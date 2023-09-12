const { Order } = require('../models');

const orderData = [
  {
    user_id: 1,
    product_id: 1,
    quantity: 1,
    address: '1234 Main St',
    city: 'New York',
    state: 'NY',
    zip: 10001,
    paymentType: 'Credit Card',
  },
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;
