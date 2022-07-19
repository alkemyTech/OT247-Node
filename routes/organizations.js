const express = require('express');
const organizationsRouter = express.Router();
const { getPublicOrganization } = require('../controllers/organization');

//GET public organization
organizationsRouter.get('/public/:id', getPublicOrganization);

module.exports = organizationsRouter;
