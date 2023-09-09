const router = require('express').Router();
const routes = require('./routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', routes);

module.exports = router;
