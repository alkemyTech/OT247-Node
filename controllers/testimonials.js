const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { createTestimonialsService, updateTestimonial } = require('../services/testimonial');

module.exports = {
  createTestimonial: catchAsync(async (req, res, next) => {
    try {
      const { name, image, content } = req.body;

      const newTestimonial = { name, image, content };
      const createdTestimonial = await createTestimonialsService(newTestimonial);

      endpointResponse({
        res,
        message: 'Testimonial created successfully',
        body: createdTestimonial,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating activity] - [activities - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),
  updateTestimonial: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;
      const { id } = req.params;

      const testimonial = await updateTestimonial(id, body);
      endpointResponse({
        code: 200,
        res,
        body: testimonial,
        message: 'Testimonial successfully updated',
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating activity] - [activities - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),

};
