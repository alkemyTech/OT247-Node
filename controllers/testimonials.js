const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { getTestimonialsService, createTestimonialsService, updateTestimonialService } = require('../services/testimonial');

module.exports = {
  getTestimonials: catchAsync(async (req, res, next) => {
    try {
      const page = req.query;
      const testimonials = await getTestimonialsService(page);
      if (!testimonials) return res.status(404).json(endpointResponse(false, 'Testimonials not found'));

      return res.status(200).json(testimonials);
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error listing testimonials] - [testimonials - GET]: ${error.message}`,
      );
      return next(httpError);
    }
  }),

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

      const testimonial = await updateTestimonialService(id, body);
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
