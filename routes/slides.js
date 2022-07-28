const express = require('express');

const router = express.Router();
const slidesCtrl = require('../controllers/slides');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', isAdmin, slidesCtrl.getSlides);

module.exports = router;