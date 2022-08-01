const express = require('express');
const router = express.Router();

const { getAllContacts } = require('../controllers/contacts');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', isAdmin, getAllContacts);

module.exports = router;
