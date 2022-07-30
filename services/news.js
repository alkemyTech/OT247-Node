const { ErrorObject } = require('../helpers/error');
const { News } = require('../models');
const { existNews } = require('../helpers/existNews');

const deleteNewsService = async (id) => {
  try {
    const news = await existNews(id);
    if (!news) throw new ErrorObject('News not found', 404);
    return await News.destroy({ where: { id } });
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports = { deleteNewsService };
