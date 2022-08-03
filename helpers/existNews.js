const { News } = require('../models');
const { ErrorObject } = require('./error');

const existNews = async (idNews) => {
  try {
    const news = await News.findByPk(idNews);
    return news;
  } catch (err) {
    throw new ErrorObject(404, 'News not found');
  }
};

module.exports = { existNews };
