const { News } = require('../models');
const { ErrorObject } = require('../helpers/error');

const updateNewsService = async (id, body) => {
  try {
    const updateNews = await News.update(
      {
        name: body.name,
        content: body.content,
        image: body.image,
        categoryId: body.categoryId
      },
      { where: { id } }
    );
    return updateNews;
  } catch (error) {
    throw new ErrorObject(404, 'News not found');
  };
};

module.exports = {
  updateNewsService,
};