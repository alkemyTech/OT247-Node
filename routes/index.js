const express = require('express');

const router = express.Router();

const swaggerUI = require('swagger-ui-express');
const swaggerSetup = require('../docs/swagger');
const categoriesRouter = require('./categories');
const organizationsRouter = require('./organizations');
const newsRouter = require('./news');
const authRouter = require('./auth');
const userRouter = require('./users');
const activitiesRouter = require('./activities');
const contactsRouter = require('./contacts');
const slidesRouter = require('./slides');
const testimonialsRouter = require('./testimonials');
const membersRouter = require('./members');
const backofficeRouter = require('./backoffice');
const commentRouter = require('./comment');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Swagger Documentation
router.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSetup));

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
router.use('/slides', slidesRouter);

// Testimonials
router.use('/testimonials', testimonialsRouter);

// Members
router.use('/members', membersRouter);

// BackOffice
router.use('/backoffice', backofficeRouter);

router.use('/comments', commentRouter);

module.exports = router;
