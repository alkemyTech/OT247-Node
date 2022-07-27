const { ErrorObject } = require('../helpers/error');

const { News } = require('../models/news.js');

const updateNewsService = async (body) => {
  try {
    // encontrar antes el objeto a actualizar
    const newsObject = await News.findById(body.id);
    if(!newsObject) throw new ErrorObject('News not found', 404);
    
    const updateNews = await News.update(
      {
        name: body.name,
        content: body.content,
        image: body.image,
        categoryId: body.categoryId,
      },
      { where: { id: body.id } }
    );
    return updateNews;
  } catch (error) {
    throw new ErrorObject(404, 'News not found');
  };
};

module.exports = {
  updateNewsService,
};