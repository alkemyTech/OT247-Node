const express = require('express');

const router = express.Router();
const {
  createNews, updateNews, getNewsById, deleteNews, getNews,
} = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { existNews } = require('../helpers/existNews');
const { newsCreate } = require('../schemas/news');

// Este esquema no existe, deberia crearse
// const { news } = require('../schemas/news');

router.get('/:id', isAdmin, getNewsById)
  .get('/', getNews)
  .put('/:id', isAdmin, existNews, updateNews)
  .post('/', isAdmin, schemaValidator(newsCreate), createNews)
  .delete('/:id', isAdmin, deleteNews);

module.exports = router;
