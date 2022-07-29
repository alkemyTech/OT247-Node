const express = require('express');
const router = express.Router();
const { updateNews } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { news } = require('../schemas/news');
const { existNews } = require('../helpers/existNews');

// PUT news by id
router.put('/:id', isAdmin, existNews, schemaValidator(news), updateNews);

module.exports = router;