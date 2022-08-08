const express = require('express');

const router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin');
const { verify } = require('../middlewares/verifyToken');

const categoryCtrl = require('../controllers/categories');
const { schemaValidator } = require('../middlewares/validator');
const { category } = require('../schemas/category');
const { categoryExists } = require('../middlewares/categoryExists');

router
  .get('/', isAdmin, categoryCtrl.getCategoriesNames)
  .post('/', verify, isAdmin, schemaValidator(category), categoryCtrl.createCategory)
  .get('/:id', isAdmin, categoryCtrl.getCategoryAsAdmin)
  .put('/:id', isAdmin, schemaValidator(category), categoryCtrl.updateCategoryById)
  .delete('/:id', isAdmin, categoryExists, categoryCtrl.deleteCategoryById);

module.exports = router;
