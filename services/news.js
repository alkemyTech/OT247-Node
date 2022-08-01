const { News } = require('../models');
const ErrorObject = require('../helpers/error');

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
  getNewsByIdService,
};
