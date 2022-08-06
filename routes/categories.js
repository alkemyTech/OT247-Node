const express = require('express');
const controller = require('../controllers/categories');
const schema = require('../schemas/category');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { categoryExists } = require('../middlewares/categoryExists');

const router = express.Router();

router
  .use(isAdmin)

  .get('/', controller.getCategoriesNames)
  .post('/', schemaValidator(schema.category), controller.createCategory)

  .get('/:id', controller.getCategoryAsAdmin)
  .put('/:id', schemaValidator(schema.category), controller.updateCategoryById)
  .delete('/:id', categoryExists, controller.deleteCategoryById);

module.exports = router;
