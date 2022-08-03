const { Slide } = require('../models');
const { ErrorObject } = require('../helpers/error');

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

module.exports = { getSlideById, deleteSlideById };
