const router = require('express').Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const protienRoutes = require('./protienRoutes');
const styleRoutes = require('./styleRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/protiens', protienRoutes);
router.use('/styles', styleRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
