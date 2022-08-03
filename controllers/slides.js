const createHttpError = require('http-errors');
const slidesService = require('../services/slides');
const { endpointResponse } = require('../helpers/success');

module.exports = {
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
};
