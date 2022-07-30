const express = require('express');

const router = express.Router();
const { isAdmin } = require('../middlewares/isAdmin');
const { deleteNews } = require('../controllers/news');

router.delete('/:id', isAdmin, deleteNews);

module.exports = router;
