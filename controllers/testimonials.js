const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { createTestimonialsService } = require('../services/testimonial');

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
          error.statusCode,
          `[Error updating activity] - [activities - PUT]: ${error.message}`,
        );
        next(httpError);
      }
  }),   
}