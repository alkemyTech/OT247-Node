var express = require('express');
var router = express.Router();
const {getCategories} = require('../controllers/categories');

router.get('/', getCategories)

module.exports = router;

