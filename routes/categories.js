var express = require('express');
var router = express.Router();
const {getCategoriesNames} = require('../controllers/categories');
const {isAdmin} = require('../middlewares/isAdmin');

router.get('/', isAdmin, function(req, res, next){
	getCategoriesNames(req, res, next)
})

module.exports = router;
