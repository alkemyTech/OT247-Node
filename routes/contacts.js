const express = require('express');

const router = express.Router();

const { getAllContacts } = require('../controllers/contacts');
const contactsCtrl = require('../controllers/contacts');
const { isAdmin } = require('../middlewares/isAdmin');
const contactSchema = require('../schemas/contact');
const { schemaValidator } = require('../middlewares/validator');

router.get('/', isAdmin, getAllContacts);
router.post('/', schemaValidator(contactSchema.createContact), contactsCtrl.createContact);

module.exports = router;
