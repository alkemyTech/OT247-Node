var express = require('express');
var router = express.Router();
const { activitiesRegister } = require('../controllers/activities');

router.post('/', isAdmin, function(req, res, next){
  activitiesRegister(req, res, next);
});

module.exports = router;