const express = require('express');

const router = express.Router();
const { getSlides } = require('../controllers/slides');
const { isAdmin } = require('../middlewares/isAdmin');
const { deleteSlideById } = require('../controllers/slides');
const { getSlideById, updateSlideById } = require('../controllers/slides');
const { verify } = require('../middlewares/verifyToken');
const { slideExists } = require('../middlewares/slideExists');
const slideSchema = require('../schemas/slide');
const { schemaValidator } = require('../middlewares/validator');

router.get('/', isAdmin, getSlides);
router.delete('/:id', verify, isAdmin, slideExists, deleteSlideById);
router.get('/:id', verify, isAdmin, slideExists, getSlideById);

router.put('/:id', verify, isAdmin, schemaValidator(slideSchema), updateSlideById);

module.exports = router;
