const { Category } = require('../models');

const getCategoryAsAdmin = async (id) => {
  try {
    return await Category.findOne({ where: { id } });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getCategoryAsAdmin };
