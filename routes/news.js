const express = require('express');
const router = express.Router();

const {
  createNews, updateNews, getNewsById, deleteNews, getNews, getCommentsFromNews,
} = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { existNews } = require('../helpers/existNews');
const { newsCreate } = require('../schemas/news');
const { verify } = require('../middlewares/verifyToken');

router.get('/:id', isAdmin, getNewsById)
  .get('/', getNews)
  .get('/:id/comments', verify, getCommentsFromNews)
  .put('/:id', isAdmin, existNews, updateNews)
  .post('/', schemaValidator(newsCreate), createNews)
  .delete('/:id', isAdmin, deleteNews);

module.exports = router;
