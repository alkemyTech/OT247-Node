const express = require('express');

const router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin');
const { verify } = require('../middlewares/verifyToken');
const { getTestimonials, createTestimonial, updateTestimonial } = require('../controllers/testimonials');
const { schemaValidator } = require('../middlewares/validator');
const { testimonial } = require('../schemas/testimonial');

router.get('/', verify, isAdmin, getTestimonials);
router.post('/', verify, isAdmin, schemaValidator(testimonial), createTestimonial);
router.put('/:id', verify, isAdmin, schemaValidator(testimonial), updateTestimonial);

module.exports = router;
