const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');

const { deleteTestimonialService } = require('../services/testimonial');

module.exports = {
  deleteTestimonial: async (req, res, next) => {
    try {
      const { id } = req.params;

      const deletedTestimonial = await deleteTestimonialService(parseInt(id, 10));
      endpointResponse({
        res,
        message: 'Testimonial deleted successfully',
        body: deletedTestimonial,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        error.message,
      );
      next(httpError);
    }
  },
};
