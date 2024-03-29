const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSetup = require('../docs/swagger');
const { importAllJS } = require('../helpers/importAll');
const { verify } = require('../middlewares/verifyToken');
const authRouter = require('./auth');

const router = express.Router();
const routes = importAllJS(__filename, __dirname);

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

// Unprotected Routes
router
  .use('/', routes.root)
  .use('/auth', routes.auth)
  .use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSetup));

// Protected Routes
router
  .use(verify)
  .use('/activities', routes.activities)
  .use('/backoffice', routes.backoffice)
  .use('/categories', routes.categories)
  .use('/comments', routes.comments)
  .use('/contacts', routes.contacts)
  .use('/members', routes.members)
  .use('/news', routes.news)
  .use('/organizations', routes.organizations)
  .use('/slides', routes.slides)
  .use('/testimonials', routes.testimonials)
  .use('/users', routes.users);

module.exports = router;
