const express = require('express');

const router = express.Router();

const { comment } = require('../schemas/comment');
const { createComment } = require('../controllers/comments');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator');

router.post('/', verify, schemaValidator(comment), createComment);

module.exports = router;
