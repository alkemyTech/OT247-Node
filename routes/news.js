const express = require('express');

const router = express.Router();
const { getNewsById } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');

// GET news by id
router.get('/:id', isAdmin, getNewsById);

module.exports = router;
