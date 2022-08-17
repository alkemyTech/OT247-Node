const express = require('express')
const router = express.Router()

const { comment } = require('../schemas/comment')
const { createComment, deleteCommentById } = require('../controllers/comments')
const { verify } = require('../middlewares/verifyToken')
const { isAuthorized } = require('../middlewares/isAuthorizedComment')
const { schemaValidator } = require('../middlewares/validator')

router
  .post('/', verify, schemaValidator(comment), createComment)
  .delete('/:id', isAuthorized, deleteCommentById)

module.exports = router
