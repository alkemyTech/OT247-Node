const express = require('express');

const router = express.Router();

const { isAdmin } = require('../middlewares/isAdmin');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator');
const { comment } = require('../schemas/comment');
const commentCtrl = require('../controllers/comments');
const { existComment } = require('../helpers/existComment');

router.put('/:id', verify, isAdmin, existComment, schemaValidator(comment), commentCtrl.updateCommentById);

module.exports = router;
