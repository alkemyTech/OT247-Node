const { Slide } = require('../models');

const getSlidesService = async () => {
  try {
    return await Slide.findAll({
      attributes: ['imageUrl', 'order'],
    });
  } catch (err) {
    return { error: err };
  }
};

module.exports = { getSlidesService };