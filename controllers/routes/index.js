
const router = require('express').Router();
const homepageRoute = require('./homepage');
const productRoute = require('./product');
const productsRoute = require('./products');
const loginRoute = require('./login');
const ordersRoute = require('./orders');

router.use('/homepage', homepageRoute);
router.use('/product', productRoute);
router.use('/products', productsRoute);
router.use('/login', loginRoute);
router.use('/orders', ordersRoute);

module.exports = router;
