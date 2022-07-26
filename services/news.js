const { News } = require('../models/news.js');

const updateNewsService = async (body) => {
  try {
    return await News.update(
      {
        name: body.name,
        content: body.content,
        image: body.image,
        categoryId: body.categoryId,
      },
      { where: { id: body.id } }
    );
  } catch (error) {
    throw new Error(error);
  };
};

module.exports = {
    updateNewsService,
};