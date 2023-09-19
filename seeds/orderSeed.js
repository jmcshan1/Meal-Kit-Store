//require models
const { Order } = require('../models');

//create and export data
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

//create and export function
const seedOrders = () => Order.bulkCreate(orderData);
//export seedOrders
module.exports = seedOrders;
