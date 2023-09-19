// index for controllers
const router = require('express').Router();

//required dependencies
const apiRoutes = require('./api');
const homepageRoute = require('./homepage');

//set up routes
router.use('/api', apiRoutes);
router.use('/', homepageRoute);

//export routes
module.exports = router;