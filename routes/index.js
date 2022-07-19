var express = require('express');
var router = express.Router();

const {User} = require('../models');
const categoriesRouter = require('./categories');
const authRouter = require('./auth');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.use('/categories', categoriesRouter);
router.use('/auth', authRouter);

module.exports = router;
