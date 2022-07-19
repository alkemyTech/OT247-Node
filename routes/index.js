var express = require('express');
var router = express.Router();

const categoriesRouter = require('./categories')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/categories', categoriesRouter);

module.exports = router;
