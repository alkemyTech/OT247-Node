var express = require('express');
var router = express.Router();
const categoryCtrl = require('../controllers/categories');
const { schemaValidator } = require('../middlewares/validator')
const { category } = require('../schemas/category')
const { isAdmin } = require('../middlewares/isAdmin')
const { verify } = require('../middlewares/verifyToken')

router
  .get('/', categoryCtrl.getCategories)
  .post('/', verify, isAdmin, schemaValidator(category), categoryCtrl.createCategory)

module.exports = router;
