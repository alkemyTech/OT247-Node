var express = require('express');
var router= express.Router();

const { getCategories, updateCategoryById } = require('../controllers/categories');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator')
const { category } = require('../schemas/category');


router.get('/', getCategories)
router.put('/:id', isAdmin, schemaValidator(category), updateCategoryById)

module.exports = router;

