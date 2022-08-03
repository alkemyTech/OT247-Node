const { News } = require('../models');
const { existNews } = require('../helpers/existNews');
const { ErrorObject } = require('../helpers/error');

const deleteNewsService = async (id) => {
  try {
    const news = await existNews(id);
    if (!news) throw new ErrorObject('News not found', 404);
    return await News.destroy({ where: { id } });
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

const createNews = async (body) => {
  try {
    return await News.create({
      name: body.name,
      content: body.content,
      image: body.image,
      categoryId: body.categoryId,
      type: 'news',
    });
  } catch (err) {
    throw new ErrorObject(400, 'An error has occurred');
  }
};

const getNewsByIdService = async (id) => {
  try {
    return await News.findByPk(id);
  } catch (err) {
    return { error: err };
  }
};

module.exports = {
  createNews,
  deleteNewsService,
  getNewsByIdService,
};
