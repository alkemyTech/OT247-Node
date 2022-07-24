const { News } = require('../models');

const getNewsById = async (id) => {
  try {
      return await News.findByPk(id);
  } catch (err) {
      return { error: err };
  }
}

module.exports = {
  getNewsById,
}