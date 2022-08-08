const { Testimonial } = require('../models');
const { ErrorObject } = require('../helpers/error');
const { existTestimonial } = require('../helpers/existTestimonial');
const { paginate } = require('../helpers/paginate');

const getTestimonialsService = async (page) => {
  try {
    return await paginate(page, 'testimonials', Testimonial);
  } catch (err) {
    throw new ErrorObject('Testimonials not found', 404);
  }
};

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
    throw new ErrorObject(404, 'Testimonial not found');
  }
};

const updateTestimonialService = async (id, body) => {
  try {
    const testimonial = await Testimonial.findOne({
      where: { id },
    });
    if (!testimonial) {
      throw new ErrorObject('Testimonial not found', 404);
    }
    await Testimonial.update({
      name: body.name,
      image: body.image,
      content: body.content,
    }, {
      where: { id },
    });
    return testimonial;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

const deleteTestimonialService = async (id) => {
  try {
    const testimonial = await existTestimonial(id);
    if (!testimonial) throw new ErrorObject('Testimonial not found', 404);
    return await Testimonial.destroy({ where: { id } });
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports = {
  getTestimonialsService,
  createTestimonialsService,
  updateTestimonialService,
  deleteTestimonialService,
};
