const { ErrorObject } = require('../helpers/error');
const { Testimonial } = require('../models');
const { existTestimonial } = require('../helpers/existTestimonial');

const deleteTestimonialService = async (id) => {
  try {
    const testimonial = await existTestimonial(id);
    if (!testimonial) throw new ErrorObject('Testimonial not found', 404);
    return await Testimonial.destroy({ where: { id } });
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports = { deleteTestimonialService };
