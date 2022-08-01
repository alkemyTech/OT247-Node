const { News } = require('../models');

const getNewsByIdService = async (id) => {
  try {
    return await News.findByPk(id);
  } catch (err) {
    return { error: err };
  }
};

module.exports = {
  getNewsByIdService,
};
