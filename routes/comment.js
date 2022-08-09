const express = require('express');

const router = express.Router();

const { verify } = require('../middlewares/verifyToken');
const { isAdmin } = require('../middlewares/isAdmin');
const commentCtrl = require('../controllers/comments');

router.get('/', verify, isAdmin, commentCtrl.getComments);

module.exports = router;
