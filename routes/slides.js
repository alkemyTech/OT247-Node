const express = require('express');
const controller = require('../controllers/slides');
const schema = require('../schemas/slide');
const { isAdmin } = require('../middlewares/isAdmin');
const { slideExists } = require('../middlewares/slideExists');
const { schemaValidator } = require('../middlewares/validator');

const router = express.Router();

router
  .use(isAdmin)
  .get('/', controller.getSlides)

  .get('/:id', slideExists, controller.getSlideById)
  .put('/:id', schemaValidator(schema), controller.updateSlideById)
  .delete('/:id', slideExists, controller.deleteSlideById);

module.exports = router;
