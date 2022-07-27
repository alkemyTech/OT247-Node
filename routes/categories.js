const express = require('express');
const router = express.Router();
const { getCategoriesNames } = require('../controllers/categories');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', isAdmin, getCategoriesNames)

module.exports = router;
