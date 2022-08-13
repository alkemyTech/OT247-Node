const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const testimonialsService = require('../services/testimonial');

module.exports = {
  getTestimonials: catchAsync(async (req, res, next) => {
    try {
      const page = req.query;
      const testimonials = await testimonialsService.getTestimonialsService(page);
      endpointResponse({
        res,
        message: 'Testimonial loaded successfully',
        body: testimonials,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error loading testimonials] - [testimonials - GET]: ${err.message}`,
      );
      return next(httpError);
    }
  }),

  createTestimonial: catchAsync(async (req, res, next) => {
    try {
      const { name, image, content } = req.body;

      const newTestimonial = { name, image, content };
      const testimonials = await testimonialsService.createTestimonialsService(newTestimonial);

      endpointResponse({
        res,
        message: 'Testimonial created successfully',
        body: testimonials,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating testimonial] - [testimonials - POST]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  updateTestimonial: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;
      const { id } = req.params;

      const testimonial = await testimonialsService.updateTestimonialService(id, body);
      endpointResponse({
        code: 200,
        res,
        body: testimonial,
        message: 'Testimonial successfully updated',
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating testimonial] - [testimonials - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  deleteTestimonial: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;

      const testimonials = await testimonialsService.deleteTestimonialService(parseInt(id, 10));
      endpointResponse({
        res,
        message: 'Testimonial deleted successfully',
        body: testimonials,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting testimonial] - [testimonials - DELETE]: ${err.message}`,
      );
      next(httpError);
    }
  }),
};
