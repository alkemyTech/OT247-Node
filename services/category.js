const { Category } = require('../models')

const createCategory = async (newCategory) => {
  try {
    return createdCategory = await Category.create(newCategory)
  } catch (err) {
    throw err
  }
}

const getCategoryAsAdmin = async (id) => {
  try {
    return await Category.findOne({ where: { id } });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { createCategory, getCategoryAsAdmin }
