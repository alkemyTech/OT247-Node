const express = require('express');
const router = express.Router();
const { updateNews } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');

// PUT news by id
router.put('/:id', isAdmin, updateNews);

module.exports = router;