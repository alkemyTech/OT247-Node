const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const { deleteNewsService } = require('../services/news');

module.exports = {
  deleteNews: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;

      const deletedNews = await deleteNewsService(parseInt(id, 10));
      endpointResponse({
        res,
        message: 'News deleted successfully',
        body: deletedNews,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        error.message,
      );
      next(httpError);
    }
  }),
};
