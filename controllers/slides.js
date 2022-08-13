const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const slidesService = require('../services/slides');

module.exports = {
  getSlides: catchAsync(async (req, res, next) => {
    try {
      const slides = await slidesService.getSlidesService();
      endpointResponse({
        res,
        message: 'Slides listed successfully',
        body: slides,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error loading slides] - [slides - GET]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  getSlideById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const slide = await slidesService.getSlideById(id);

      endpointResponse({
        res,
        message: 'Slides found successfully',
        body: slide,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error finding slide] - [Slide - GET]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  updateSlideById: catchAsync(async (req, res, next) => {
    try {
      const { params, body } = req;

      const slide = await slidesService.updateSlideById(params, body);

      return endpointResponse({
        res,
        message: 'Slide updated successfully',
        body: slide,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating slide] - [Slide - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  deleteSlideById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;

      await slidesService.deleteSlideById(id);

      return endpointResponse({
        res,
        message: 'Slide deleted successfully',
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting slides] - [slides - DELETE]: ${err.message}`,
      );
      next(httpError);
    }
  }),
};
