const express = require('express');
const router = express.Router();

const categoriesRouter = require('./categories');
const organizationsRouter = require('./organizations');
const authRouter = require('./auth');
const userRouter = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.use('/categories', categoriesRouter);
router.use('/auth', authRouter);

//Organizations
router.use('/organizations', organizationsRouter);

//Users
router.use('/users', userRouter);

module.exports = router;
