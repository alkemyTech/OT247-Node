var express = require('express');
var router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin')
const { verify } = require('../middlewares/verifyToken')
const categoryCtrl = require('../controllers/categories');
const { schemaValidator } = require('../middlewares/validator')
const { category } = require('../schemas/category')
const { categoryExists } = require('../middlewares/categoryExists')

router
  .get('/', categoryCtrl.getCategories)
  .post('/', verify, isAdmin, schemaValidator(category), categoryCtrl.createCategory)
  .get('/:id', isAdmin, categoryCtrl.getCategoryAsAdmin)
  .delete('/:id', isAdmin, categoryExists, categoryCtrl.deleteCategoryById)

module.exports = router;
