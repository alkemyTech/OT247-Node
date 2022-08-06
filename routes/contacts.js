const express = require('express');
const controller = require('../controllers/contacts');
const schema = require('../schemas/contact');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');

const router = express.Router();

router
  .post('/', schemaValidator(schema.createContact), controller.createContact);

router
  .use(isAdmin)
  .get('/', controller.getAllContacts);

module.exports = router;
