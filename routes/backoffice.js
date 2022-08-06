const express = require('express');
const controller = require('../controllers/backoffice');
const { isAdmin } = require('../middlewares/isAdmin');

const router = express.Router();

router
  .use(isAdmin)
  .get('/contacts', controller.getContactsBO);

module.exports = router;
