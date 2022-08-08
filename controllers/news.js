const createHttpError = require('http-errors');
const {
  createNews,
  getNewsByIdService,
  deleteNewsService,
} = require('../services/news');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const { updateNewsService } = require('../services/news');

module.exports = {
  updateNews: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const integerId = Number.isInteger(parseInt(id, 10));
      if (integerId) {
        await updateNewsService(id, req.body);
        endpointResponse({
          res,
          message: 'News updated successfully',
        });
      } else {
        res.status(412).send('id param has to be a integer');
      }
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating news] - [news - PUT]: ${error.message}`,
      );
      next(httpError);
    }
  }),

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
      const httpError = createHttpError(error.statusCode, error.message);
      next(httpError);
    }
  }),

  createNews: async (req, res) => {
    try {
      const { body } = req;
      const news = await createNews(body);

      return endpointResponse({
        res,
        message: 'News created',
        body: news,
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: 'An error has occurred',
        error: err.message,
      });
    }
  },
  getNewsById: async (req, res) => {
    const { id } = req.params;
    const news = await getNewsByIdService(id);

    if (news !== null && news.error) {
      return res.status(400).send('an error has occurred');
    }

    if (news === null) return res.status(404).send('news not found');

    return res.status(200).json(news);
  },
};
