const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { getSlidesService } = require('../services/slides');
const slidesService = require('../services/slides');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  getSlides: catchAsync(async (req, res, next) => {
    try {
      const slides = await getSlidesService();
      endpointResponse({
        res,
        message: 'Slides listed successfully',
        body: slides,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error listing slides] - [slides - GET]: ${error.message}`,
      );
      next(httpError);
    }
  }),

  deleteSlideById: async (req, res) => {
    try {
      const { id } = req.params;

      await slidesService.deleteSlideById(id);

      return endpointResponse({
        res,
        message: 'Slide deleted successfully',
      });
    } catch (err) {
      const error = new ErrorObject(
        err.message,
        err.statusCode || 400,
        err.errors || err.stack,
      );
      res.json(error);
    }
  },

  getSlideById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const slide = await slidesService.getSlideById(id);

      endpointResponse({
        res,
        message: 'Slides found successfully',
        body: slide,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error finding slide] - [Slide - GET]: ${error.message}`,
      );
      next(httpError);
    }
  },

  updateSlideById: async (req, res) => {
    try {
      const { params, body } = req;

      await slidesService.updateSlideById(params, body);

      return endpointResponse({
        res,
        message: 'Slide updated successfully',
      });
    } catch (err) {
      const error = new ErrorObject(err.message, err.statusCode || 400, err.errors || err.stack);
      return res.json(error);
    }
  },
};
