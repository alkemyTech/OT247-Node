const express = require('express');
const router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { activity } = require('../schemas/activity');

const { updateActivity } = require('../controllers/activities');

router.put('/:id', isAdmin, schemaValidator(activity), updateActivity)

module.exports = router;