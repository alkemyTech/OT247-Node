const express = require('express');

const router = express.Router();
const { getSlides } = require('../controllers/slides');
const { isAdmin } = require('../middlewares/isAdmin');
const { deleteSlideById } = require('../controllers/slides');
const { getSlideById } = require('../controllers/slides');
const { verify } = require('../middlewares/verifyToken');
const { slideExists } = require('../middlewares/slideExists');

router.get('/', isAdmin, getSlides);
// Delete slide
router.delete('/:id', verify, isAdmin, slideExists, deleteSlideById);
router.get('/:id', verify, isAdmin, slideExists, getSlideById);

module.exports = router;
