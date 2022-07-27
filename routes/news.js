const express = require('express');
const router = express.Router();
const { updateNews } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { news } = require('../schemas/news');

// PUT news by id
router.put('/:id', isAdmin, schemaValidator(news), updateNews);

module.exports = router;