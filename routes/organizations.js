const express = require('express');
const router = express.Router();
const { getPublicOrganization } = require('../controllers/organization');

//GET public organization
router.get('/public/:id', getPublicOrganization);

module.exports = router;
