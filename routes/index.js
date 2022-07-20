var express = require('express');
var router = express.Router();

const authRouter = require('./auth');
const categoriesRouter = require('./categories')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', authRouter)
router.use('/categories', categoriesRouter);

module.exports = router;
