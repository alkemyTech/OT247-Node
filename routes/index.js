var express = require('express');
var router = express.Router();

const categoriesRouter = require('./categories');
const organizationsRouter = require('./organizations');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//Categories
router.use('/categories', categoriesRouter);

//Organizations
router.use('/organizations', organizationsRouter);

module.exports = router;
