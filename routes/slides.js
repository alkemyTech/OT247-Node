const express = require('express');

const router = express.Router();
const { getSlideById } = require('../controllers/slides');
const { isAdmin } = require('../middlewares/isAdmin');
const { verify } = require('../middlewares/verifyToken');
const { slideExists } = require('../middlewares/slideExists');

router.get('/:id', verify, isAdmin, slideExists, getSlideById);

module.exports = router;
