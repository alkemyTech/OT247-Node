const { News } = require('../models');

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
    throw new Error(err);
  }
};

module.exports = { createNews };
