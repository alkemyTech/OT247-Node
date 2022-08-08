const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { createNewComment } = require('../services/comments');

module.exports = {
  createComment: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;
      const newComment = await createNewComment(body);
      endpointResponse({
        res,
        message: 'Comment created succesfully',
        body: newComment,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating comments] - [comments - POST]: ${error.message}`,
      );
      next(httpError);
    }
  }),
};
