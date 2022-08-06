const express = require('express');
const controller = require('../controllers/activities');
const schema = require('../schemas/activity');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');

const router = express.Router();

router
  .use(isAdmin)
  .put('/:id', schemaValidator(schema.activity), controller.updateActivity);

module.exports = router;
