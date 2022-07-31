const express = require('express');

const router = express.Router();
const { isAdmin } = require('../middlewares/isAdmin');
const { deleteTestimonial } = require('../controllers/testimonial');

router.delete('/:id', isAdmin, deleteTestimonial);

module.exports = router;
