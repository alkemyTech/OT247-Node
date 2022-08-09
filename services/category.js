const { Category } = require('../models');
const { ErrorObject } = require('../helpers/error');
const existCategory = require('../helpers/existCategory');
const { paginate } = require('../helpers/paginate');

const getCategoriesNames = async (query) => {
  try {
    const attributes = ['name'];
    return await paginate(query, 'categories', Category, attributes);
  } catch (err) {
    throw new ErrorObject(404, 'Categories not found');
  }
};

const getCategoryAsAdmin = async (id) => {
  try {
    return await Category.findOne({ where: { id } });
  } catch (err) {
    throw new Error(err);
  }
};

const createCategory = async (newCategory) => {
  try {
    return await Category.create(newCategory);
  } catch (err) {
    throw new ErrorObject(500, err.message);
  }
};

const updateCategoryById = async (id, body) => {
  try {
    const category = await existCategory(id);
    const { name, description, image } = body;

    if (!category) {
      throw new ErrorObject('Category not found', 404);
    }

    const updatedCategory = await Category.update({
      name,
      description,
      image,
    }, {
      where: {
        id,
      },
    });
    return updatedCategory;
  } catch (err) {
    throw new ErrorObject(500, err.message);
  }
};

const deleteCategoryById = async (id) => {
  try {
    return await Category.destroy({ where: { id } });
  } catch (err) {
    throw new ErrorObject(500, err.message);
  }
};

module.exports = {
  getCategoriesNames,
  getCategoryAsAdmin,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
