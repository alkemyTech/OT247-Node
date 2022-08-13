const express = require('express');

const router = express.Router();

const { isAuthorized } = require('../middlewares/isAuthorizedComment');
const { verify } = require('../middlewares/verifyToken');

const commentCtrl = require('../controllers/comments');

router.get('/', verify, isAuthorized, commentCtrl.getCommentsControllers);
router.delete('/:id', verify, isAuthorized, commentCtrl.deleteCommentById);

module.exports = router;
