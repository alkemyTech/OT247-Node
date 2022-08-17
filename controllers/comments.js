const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { createNewComment, commentService } = require('../services/comments')

module.exports = {
  createComment: catchAsync(async (req, res, next) => {
    try {
      const { body } = req
      const newComment = await createNewComment(body)
      endpointResponse({
        res,
        message: 'Comment created succesfully',
        body: newComment,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating comments] - [comments - POST]: ${error.message}`
      )
      next(httpError)
    }
  }),

  updateCommentById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params
      const { body } = req
      await commentService.updateCommentById(id, body)
      endpointResponse({
        res,
        statusCode: 200,
        message: 'Comment updated',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating comments] - [comments - POST]: ${error.message}`
      )
      next(httpError)
    }
  }),

  deleteCommentById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params

      await commentService.deleteCommentById(id)
      endpointResponse({
        res,
        message: 'Comment deleted successfully',
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting comment] - [comment - DELETE]: ${err.message}`
      )
      next(httpError)
    }
  }),

  getCommentsControllers: catchAsync(async (req, res, next) => {
    try {
      const comments = await commentService.getCommentsServices()
      endpointResponse({
        res,
        mesage: 'Comments found successfully',
        body: comments,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error error getting comments] - [comment - GET]: ${error.message}`
      )
      next(httpError)
    }
  }),
}
