const express = require('express');

const router = express.Router();

const { getContactsBO } = require('../controllers/backoffice');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/contacts', isAdmin, getContactsBO);

module.exports = router;