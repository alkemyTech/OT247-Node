const { Slide } = require('../models');

const getSlideById = async (id) => {
  try {
    return await Slide.findOne({ where: { id } });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { getSlideById };
