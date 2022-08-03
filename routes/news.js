const express = require('express');

const router = express.Router();
const { createNews, updateNews, getNewsById, deleteNews } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator.js');
const { news } = require('../schemas/news');
const { existNews } = require('../helpers/existNews');
const { newsCreate } = require('../schemas/news');

router.get('/:id', isAdmin, getNewsById);
router.put('/:id', isAdmin, existNews, schemaValidator(news), updateNews);
router.post('/', isAdmin, schemaValidator(newsCreate), createNews);
router.delete('/:id', isAdmin, deleteNews);

module.exports = router;
