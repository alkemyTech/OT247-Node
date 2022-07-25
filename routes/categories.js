var express = require('express');
var router= express.Router();

const { getCategories, updateCategoryById, createCategory } = require('../controllers/categories');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator')
const { category } = require('../schemas/category');
const { verify } = require('../middlewares/verifyToken')


router.get('/', getCategories)
router.post('/', verify, isAdmin, schemaValidator(category), createCategory)
router.put('/:id', isAdmin, schemaValidator(category), updateCategoryById)


module.exports = router;
