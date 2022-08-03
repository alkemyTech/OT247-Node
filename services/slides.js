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

const deleteSlideById = async (id) => {
  try {
    return await Slide.destroy({ where: { id } });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
  }
};

const getSlideById = async (id) => {
  try {
    return await Slide.findOne({ where: { id } });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { getSlideById, getSlidesService, deleteSlideById };
