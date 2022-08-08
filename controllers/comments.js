const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const commentService = require('../services/comments');

module.exports = {
  updateCommentById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      await commentService.updateCommentById(id, body);
      endpointResponse({
        res,
        statusCode: 200,
        message: 'Comment updated',
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating comment] - [comment - Update]: ${error.message}`,
      );
      next(httpError);
    }
  }),
};
