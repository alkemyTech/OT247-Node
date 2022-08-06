const express = require('express');
const { importAllJS } = require('../helpers/importAll');
const { verify } = require('../middlewares/verifyToken');

const router = express.Router();
const routes = importAllJS(__filename, __dirname);

// Unprotected Routes
router
  .use('/', routes.root)
  .use('/auth', routes.auth);

// Protected Routes
router
  .use(verify)
  .use('/activities', routes.activities)
  .use('/backoffice', routes.backoffice)
  .use('/categories', routes.categories)
  .use('/contacts', routes.contacts)
  .use('/members', routes.members)
  .use('/news', routes.news)
  .use('/organizations', routes.organizations)
  .use('/slides', routes.slides)
  .use('/testimonials', routes.testimonials)
  .use('/users', routes.users);

module.exports = router;
