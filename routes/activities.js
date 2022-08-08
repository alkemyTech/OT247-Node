const express = require('express');

const router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { activity } = require('../schemas/activity');

const { updateActivity, insertActivity } = require('../controllers/activities');

router.put('/:id', isAdmin, schemaValidator(activity), updateActivity);

router.post('/', isAdmin, function(req, res, next){
  insertActivity(req, res, next);
});

module.exports = router;
