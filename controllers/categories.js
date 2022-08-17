const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

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
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error loading category] - [Category - GET]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  getCategoryAsAdmin: async (req, res, next) => {
    try {
      const { id } = req.params;

      const gottenCategory = await categoryService.getCategoryAsAdmin(id);

      endpointResponse({
        res,
        message: 'Categories loaded successfully',
        body: gottenCategory,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error loading category] - [Category - GET]: ${err.message}`,
      );
      next(httpError);
    }
  },

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
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating category] - [Category - POST]: ${err.message}`,
      );
      next(httpError);
    }
  },

  updateCategoryById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const integerId = parseInt(id, 10);
      const { body } = req;

      const category = await categoryService.updateCategoryById(integerId, body);
      endpointResponse({
        res,
        message: 'Category updated successfully',
        body: category,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating category] - [Category - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  deleteCategoryById: async (req, res, next) => {
    try {
      const { id } = req.params;
      await categoryService.deleteCategoryById(id);

      endpointResponse({
        res,
        message: 'Category deleted successfully',
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting category] - [Category - DELETE]: ${err.message}`,
      );
      next(httpError);
    }
  },
};
