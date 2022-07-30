const express = require('express');

const router = express.Router();
const { isAdmin } = require('../middlewares/isAdmin');
const testimonialCtrl = require('../controllers/testimonial');

router.delete('/:id', isAdmin, testimonialCtrl.deleteTestimonial);

module.exports = router;
