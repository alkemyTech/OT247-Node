var express = require('express');
var router = express.Router();

const categoriesRouter = require('./categories');
const organizationsRouter = require('./organizations');
const authRouter = require('./auth');
const userRouter = require('./users');
const newsRouter = require('./news');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Auth
router.use('/auth', authRouter)

//Categories
router.use('/categories', categoriesRouter);

//Organizations
router.use('/organizations', organizationsRouter);

//Users
router.use('/users', userRouter);

//News
router.use('/news', newsRouter);

module.exports = router;
