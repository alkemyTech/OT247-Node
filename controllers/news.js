const {
  getNewsByIdService,
} = require('../services/news');

module.exports = {
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
