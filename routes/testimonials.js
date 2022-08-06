const express = require('express');
const controller = require('../controllers/testimonials');
const schema = require('../schemas/testimonial');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');

const router = express.Router();

router
  .use(isAdmin)
  .post('/', schemaValidator(schema.testimonial), controller.createTestimonial)

  .put('/:id', schemaValidator(schema.testimonial), controller.updateTestimonial);

module.exports = router;
