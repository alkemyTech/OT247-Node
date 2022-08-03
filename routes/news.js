const express = require('express');

const router = express.Router();
const { createNews, getNewsById, deleteNews } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator.js');
const { newsCreate } = require('../schemas/news');

router.get('/:id', isAdmin, getNewsById);
router.post('/', isAdmin, schemaValidator(newsCreate), createNews);
router.delete('/:id', isAdmin, deleteNews);

module.exports = router;
