const { Testimonial } = require('../models');
const { ErrorObject } = require('./error');

const existTestimonial = async (idTestimonial) => {
  try {
    const testimonial = await Testimonial.findByPk(idTestimonial);
    return testimonial;
  } catch (err) {
    throw new ErrorObject(404, 'Testimonial not found');
  }
};

module.exports = { existTestimonial };
