const express = require('express');
const router = express.Router();
const { createNews } = require('../controllers/news');

const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator.js');
const { newsCreate } = require('../schemas/news');

//POST create news
router.post('/', isAdmin, schemaValidator(newsCreate), createNews);

module.exports = router;
