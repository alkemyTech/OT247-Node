const express = require('express');

const router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin');
const { verify } = require('../middlewares/verifyToken');
const {
  getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial,
} = require('../controllers/testimonials');
const { schemaValidator } = require('../middlewares/validator');
const { testimonial } = require('../schemas/testimonial');

router
  .get('/', verify, isAdmin, getTestimonials)
  .post('/', verify, isAdmin, schemaValidator(testimonial), createTestimonial)
  .put('/:id', verify, isAdmin, schemaValidator(testimonial), updateTestimonial)
  .delete('/:id', isAdmin, deleteTestimonial);

module.exports = router;
