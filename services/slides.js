const { Slide } = require('../models');
const { ErrorObject } = require('../helpers/error');

const getSlidesService = async () => {
  try {
    const slides = await Slide.findAll({
      attributes: ['imageUrl', 'order'],
    });
    if (!slides) throw new ErrorObject(404, 'Slides not found');

    return slides;
  } catch (error) {
    throw new ErrorObject(error.statusCode, error.message);
  }
};

module.exports = { getSlidesService };
