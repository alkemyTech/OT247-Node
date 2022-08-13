const express = require('express');

const router = express.Router();

const { isAuthorized } = require('../middlewares/isAuthorizedComment');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator');
const { comment } = require('../schemas/comment');
const commentCtrl = require('../controllers/comments');
const { existComment } = require('../helpers/existComment');

router.put('/:id', verify, isAuthorized, existComment, schemaValidator(comment), commentCtrl.updateCommentById);

router.delete('/:id', verify, isAuthorized, commentCtrl.deleteCommentById);

module.exports = router;
