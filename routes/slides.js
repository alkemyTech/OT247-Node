const express = require('express');

const router = express.Router();
const { getSlides } = require('../controllers/slides');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', isAdmin, getSlides);

module.exports = router;
