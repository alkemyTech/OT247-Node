const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { parseIntId } = require('../helpers/parseIntId');

const { destroyNews } = require('../services/news');

module.exports = {
  deleteNews: async (req, res, next) => {
    try {
      const { id } = req.params;

      const deletedNews = await destroyNews(parseIntId(id));
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
  },
};
