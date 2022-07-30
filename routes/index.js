const express = require('express');

const router = express.Router();

const categoriesRouter = require('./categories');
const organizationsRouter = require('./organizations');
const newsRouter = require('./news');
const authRouter = require('./auth');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Auth
router.use('/auth', authRouter);

// Categories
router.use('/categories', categoriesRouter);

// Organizations
router.use('/organizations', organizationsRouter);

// News
router.use('/news', newsRouter);

module.exports = router;
