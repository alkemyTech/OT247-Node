const express = require('express');

const router = express.Router();

const categoriesRouter = require('./categories');
const organizationsRouter = require('./organizations');
const authRouter = require('./auth');
const userRouter = require('./users');
const newsRouter = require('./news');
const activitiesRouter = require('./activities');
const contactsRouter = require('./contacts');
const testimonialsRouter = require('./testimonials');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Auth
router.use('/auth', authRouter);

// Categories
router.get('/login', (req, res) => {
  res.render('login');
});

router.use('/categories', categoriesRouter);

// Organizations
router.use('/organizations', organizationsRouter);

// Users
router.use('/users', userRouter);

// Activities
router.use('/activities', activitiesRouter);

// News
router.use('/news', newsRouter);

// Contacts
router.use('/contacts', contactsRouter);

// Testimonials
router.use('/testimonials', testimonialsRouter);

module.exports = router;
