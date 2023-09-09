const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoute = require('./homepage');

router.use('/api', apiRoutes);
router.use('/homepage', homepageRoute);

module.exports = router;