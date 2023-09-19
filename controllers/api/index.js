//index for api routes
const router = require('express').Router();

//required dependencies
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const protienRoutes = require('./protienRoutes');
const styleRoutes = require('./styleRoutes');
const orderRoutes = require('./orderRoutes');

//set up routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/protiens', protienRoutes);
router.use('/styles', styleRoutes);
router.use('/orders', orderRoutes);

//export routes
module.exports = router;
