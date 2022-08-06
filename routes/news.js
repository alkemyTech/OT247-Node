const express = require('express');
const controller = require('../controllers/news');
const schema = require('../schemas/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { existNews } = require('../helpers/existNews');

const router = express.Router();

router
  .use(isAdmin)
  .post('/', schemaValidator(schema.newsCreate), controller.createNews)

  .get('/:id', controller.getNewsById)
  .put('/:id', existNews, controller.updateNews)
  .delete('/:id', controller.deleteNews);

module.exports = router;
