const { Category } = require('../models')

const createCategory = async (newCategory) => {
  try {
    return createdCategory = await Category.create(newCategory)
  } catch (err) {
    throw err
  }
}

module.exports = { createCategory }
