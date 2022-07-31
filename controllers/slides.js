const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { getSlidesService } = require('../services/slides');

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
};
