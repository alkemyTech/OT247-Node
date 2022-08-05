const express = require('express');

const router = express.Router();

const { verify } = require('../middlewares/verifyToken');
const commentCtrl = require('../controllers/comments');
const { isAuthorized } = require('../middlewares/isAuthorized');

router.delete('/:id', verify, isAuthorized, commentCtrl.deleteCommentById);

module.exports = router;
