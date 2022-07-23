var express = require('express');
var router = express.Router();

const { getCategories, updateCategoryById } = require('../controllers/categories');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', getCategories)
router.put('/:id', isAdmin, updateCategoryById)

module.exports = router;

