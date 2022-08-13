const express = require('express');
const controller = require('../controllers/organization');
const schema = require('../schemas/organization');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const emptyBody = require('../middlewares/emptyBody');

const router = express.Router();

router
  .get('/public/:id', controller.getPublicOrganization);

router
  .use(isAdmin)
  .patch(
    '/public/:id',
    schemaValidator(schema.organizationUpdate),
    emptyBody.organization,
    controller.updatePublicOrganization,
  );

module.exports = router;
