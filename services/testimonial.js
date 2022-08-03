const { Testimonial } = require('../models');
const { ErrorObject } = require('../helpers/error');

const createTestimonialsService = async (body) => {
  try {
    const createTestimonial = await Testimonial.create(
      {
        name: body.name,
        image: body.image,
        content: body.content,
      },
    );
    return createTestimonial;
  } catch (error) {
    throw new ErrorObject(404, 'News not found');
  };
};

module.exports = {
    createTestimonialsService,
}; 