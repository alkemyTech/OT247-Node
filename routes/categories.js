const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/isAdmin')
const { verify } = require('../middlewares/verifyToken')
const categoryCtrl = require('../controllers/categories');
const { schemaValidator } = require('../middlewares/validator')
const { category } = require('../schemas/category')
const { categoryExists } = require('../middlewares/categoryExists')
const { updateCategoryById } = require('../services/category')
 
router
  .get('/', isAdmin, categoryCtrl.getCategoriesNames)
  .post('/', verify, isAdmin, schemaValidator(category), categoryCtrl.createCategory)
  .put('/:id', isAdmin, schemaValidator(category), updateCategoryById)
  .delete('/:id', isAdmin, categoryExists, categoryCtrl.deleteCategoryById)

module.exports = router;
