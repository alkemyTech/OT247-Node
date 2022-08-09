const createHttpError = require('http-errors');

const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const { getCommentsServices } = require('../services/comment');

module.exports = {
  getCommentsControllers: catchAsync(async (req, res, next) => {
    try {
      const allComments = await getCommentsServices();
      endpointResponse({
        res,
        message: 'All comments',
        body: allComments,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error get comment] - [comment - GET]: ${error.message}`,
      );
      next(httpError);
    }
  }),
};
