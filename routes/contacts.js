const express = require('express');
const router = express.Router();

const contactsCtrl = require('../controllers/contacts');
const contactSchema = require('../schemas/contact');

const { schemaValidator } = require('../middlewares/validator');

//Create a new contact
router.post('/', schemaValidator(contactSchema.createContact), contactsCtrl.createContact);

module.exports = router;
