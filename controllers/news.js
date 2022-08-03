const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { createNews, getNewsByIdService, deleteNewsService } = require('../services/news');

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

  createNews: async (req, res) => {
    try {
      const { body } = req;

      //Try to create a news
      const news = await createNews(body);

      //Server responses
      return endpointResponse({
        res,
        message: 'News created',
        body: news,
      });
    } catch (err) {
      res.status(400).json({ status: 400, message: 'An error has occurred', error: err.message });
    }
  },
  getNewsById: async (req, res) => {
    const { id } = req.params;
    const news = await getNewsByIdService(id);

    // Error
    if (news !== null && news.error) { return res.status(400).send('an error has occurred'); }

    // In case the news was not found
    if (news === null) return res.status(404).send('news not found');

    // Found news
    return res.status(200).json(news);
  },
};

