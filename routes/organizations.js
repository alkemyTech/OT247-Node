const express = require('express');
const router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin');
const { getPublicOrganization, updatePublicOrganization } = require('../controllers/organization');
const { schemaValidator } = require('../middlewares/validator');
const { organizationUpdate } = require('../schemas/organization');
const emptyBody = require('../middlewares/emptyBody');

//GET public organization
router.get('/public/:id', getPublicOrganization);

//PATCH update public data of an organization
router.patch(
  '/public/:id',
  isAdmin,
  schemaValidator(organizationUpdate),
  emptyBody.organization,
  updatePublicOrganization
);

module.exports = router;
