const { Category } = require('../models');
const { ErrorObject } = require('./error');

const existCategory = async (idCategory) => {
  try {
    const category = await Category.findByPk(idCategory);
    return category;
  } catch (err) {
    throw new ErrorObject(404, 'Category not found');
  }
};

module.exports = existCategory;
