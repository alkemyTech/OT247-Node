const { News } = require('../models');
const { existNews } = require('../helpers/existNews');
const { ErrorObject } = require('../helpers/error');
const { paginate } = require('../helpers/paginate');
const { Comment } = require('../models');

const deleteNewsService = async (id) => {
  try {
    const news = await existNews;
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
    throw new ErrorObject(404, 'News not found');
  }
};

const updateNewsService = async (id, body) => {
  try {
    const updateNews = await News.update(
      {
        name: body.name,
        content: body.content,
        image: body.image,
        categoryId: body.categoryId,
      },
      { where: { id } },
    );
    return updateNews;
  } catch (error) {
    throw new ErrorObject(404, 'News not found');
  }
};

const getNewsService = async (page) => {
  try {
    return await paginate(page, 'news', News);
  } catch (err) {
    throw new ErrorObject(404, 'News not found');
  }
};

const getComments = async (id) => {
  try {
    return await Comment.findAll({ where: { newsId: id } });
  } catch (error) {
    throw new ErrorObject(404, `Comments from News with id ${id} not found`);
  }
};

module.exports = {
  createNews,
  deleteNewsService,
  updateNewsService,
  getNewsByIdService,
  getNewsService,
  getComments,
};
