const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const {
  getNewsService,
  getNewsByIdService,
  createNews,
  updateNewsService,
  deleteNewsService,
} = require('../services/news');

module.exports = {
  getNews: catchAsync(async (req, res, next) => {
    try {
      const page = req.query;

      const news = await getNewsService(page);

      if (!news) return res.status(404).send('news not found');
      if (news.error) return res.status(400).send('an error has occurred');

      return res.status(200).json(news);
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error listing news] - [news - GET]: ${error.message}`,
      );
      return next(httpError);
    }
  }),
  
  getNewsById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const news = await getNewsByIdService(id);

      if (!news) return res.status(404).send('news not found');
      if (news.error) return res.status(400).send('an error has occurred');

      return res.status(200).json(news);
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error searching news] - [news - GET]: ${error.message}`,
      );
      return next(httpError);
    }
  }),

  createNews: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;

      // Try to create a news
      const news = await createNews(body);

      // Server responses
      endpointResponse({
        res,
        message: 'News created',
        body: news,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating news] - [news - POST]: ${error.message}`,
      );
      next(httpError);
    }
  }),

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
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting news] - [news - DELETE]: ${error.message}`,
      );
      next(httpError);
    }
  }),

};
