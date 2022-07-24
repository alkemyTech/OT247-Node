var express = require('express');
var router = express.Router();
const { activitiesRegister } = require('../controllers/activities');

router.post('/', activitiesRegister);

module.exports = router;