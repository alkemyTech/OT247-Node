const express = require('express');
const controller = require('../controllers/slides');
const { isAdmin } = require('../middlewares/isAdmin');
const { slideExists } = require('../middlewares/slideExists');

const router = express.Router();

router
  .use(isAdmin)
  .get('/', controller.getSlides)

  .get('/:id', slideExists, controller.getSlideById)
  .delete('/:id', slideExists, controller.deleteSlideById);

module.exports = router;
