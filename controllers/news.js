const { createNews } = require('../services/news');
const { endpointResponse } = require('../helpers/success');

module.exports = {
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
};
