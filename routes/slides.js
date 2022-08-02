const express = require('express');

const router = express.Router();
const { deleteSlideById } = require('../controllers/slides');
const { isAdmin } = require('../middlewares/isAdmin');
const { verify } = require('../middlewares/verifyToken');
const { slideExists } = require('../middlewares/slideExists');

// Delete slide
router.delete('/:id', verify, isAdmin, slideExists, deleteSlideById);

module.exports = router;
