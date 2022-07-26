const { Category } = require('../models')

const createCategory = async (newCategory) => {
  try {
    return createdCategory = await Category.create(newCategory)
  } catch (err) {
    throw err
  }
}

const deleteCategoryById = async (id) => {
  try {
    return await Category.destroy({ where: { id } })
  } catch (err) {
    throw err
  }
}

module.exports = { 
  createCategory, 
  deleteCategoryById 
}
