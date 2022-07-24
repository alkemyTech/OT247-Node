const { createNews } = require('../services/news');

module.exports = {
  createNews: async (req, res) => {
    try {
      const { body } = req;

      //Try to create a news
      const createdNews = await createNews(body);

      //Server responses
      res.status(200).json({ status: 200, message: 'News created', data: createdNews });
    } catch (err) {
      res.status(400).json({ status: 400, message: 'An error has occurred', error: err.message });
    }
  },
};
