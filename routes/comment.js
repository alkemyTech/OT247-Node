const express = require('express');

const router = express.Router();

const { verify } = require('../middlewares/verifyToken');
const { isAuthorized } = require('../middlewares/isAuthorizedComment');
const commentCtrl = require('../controllers/comments');

router.delete('/:id', verify, isAuthorized, commentCtrl.deleteCommentById);

module.exports = router;
