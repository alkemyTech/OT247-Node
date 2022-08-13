const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const newsService = require('../services/news');

module.exports = {
  getNews: catchAsync(async (req, res, next) => {
    try {
      const page = req.query;
      const news = await newsService.getNewsService(page);

      return endpointResponse({
        res,
        message: 'News loaded successfully',
        body: news,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error listing news] - [news - GET]: ${err.message}`,
      );
      return next(httpError);
    }
  }),

  getNewsById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const news = await newsService.getNewsByIdService(id);

      endpointResponse({
        res,
        message: 'News loaded successfully',
        body: news,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error loading news] - [news - GET]: ${err.message}`,
      );
      return next(httpError);
    }
  }),

  createNews: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;

      const news = await newsService.createNews(body);

      endpointResponse({
        res,
        message: 'News created',
        body: news,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating news] - [news - POST]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  updateNews: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const integerId = Number.isInteger(parseInt(id, 10));
      if (integerId) {
        const news = await newsService.updateNewsService(id, req.body);
        endpointResponse({
          res,
          message: 'News updated successfully',
          body: news,
        });
      } else {
        res.status(412).send('id param has to be a integer');
      }
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating news] - [news - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  deleteNews: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const news = await newsService.deleteNewsService(parseInt(id, 10));
      endpointResponse({
        res,
        message: 'News deleted successfully',
        body: news,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting news] - [news - DELETE]: ${err.message}`,
      );
      next(httpError);
    }
  }),

};
