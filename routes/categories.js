var express = require('express');
var router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin');
const { getCategories, getCategoryAsAdmin } = require('../controllers/categories');

//GET get all categories
router.get('/', getCategories);

//GET get info of a category as admin
router.get('/:id', isAdmin, getCategoryAsAdmin);

module.exports = router;
