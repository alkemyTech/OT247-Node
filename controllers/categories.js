const createHttpError = require('http-errors');

const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { updateCategoryById } = require('../services/category');

const categoryService = require('../services/category');

module.exports = {
  getCategoriesNames: catchAsync(async (req, res, next) => {
    try {
      const page = req.query;
      const categories = await categoryService.getCategoriesNames(page);

      endpointResponse({
        res,
        message: 'Categories loaded successfully',
        body: categories,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error getting category] - [Category - GET]: ${error.message}`,
      );
      next(httpError);
    }
  }),
  updateCategoryById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const integerId = parseInt(id, 10);
      const { body } = req;

      const category = await updateCategoryById(integerId, body);
      endpointResponse({
        res,
        message: 'Category updated successfully',
        body: category,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating category] - [Category - POST]: ${error.message}`,
      );
      next(httpError);
    }
  }),
  createCategory: async (req, res, next) => {
    try {
      const { name, description, image } = req.body;

      const newCategory = { name, description, image };
      const createdCategory = await categoryService.createCategory(newCategory);

      endpointResponse({
        res,
        message: 'Category created successfully',
        body: createdCategory,
      });
    } catch (err) {
      next(err);
    }
  },
  deleteCategoryById: async (req, res) => {
    try {
      const { id } = req.params;
      await categoryService.deleteCategoryById(id);

      endpointResponse({
        res,
        message: 'Category deleted successfully',
      });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },
  getCategoryAsAdmin: async (req, res) => {
    try {
      const { id } = req.params;

      //Try to get a category
      const gottenCategory = await categoryService.getCategoryAsAdmin(id);

      //Server responses
      !gottenCategory
        ? res.status(404).json({ status: 404, message: 'Category not found' })
        : res.status(200).json({ status: 200, message: 'Category found', data: gottenCategory });
    } catch (err) {
      res.status(400).json({ status: 400, error: 'An error has occurred' });
    }
  },
};
