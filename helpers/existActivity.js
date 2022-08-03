const { Activities } = require('../models');
const { ErrorObject } = require('./error');

const existActivity = async (idActivity) => {
  try {
    const activity = await Activities.findByPk(idActivity);
    return activity;
  } catch (err) {
    throw new ErrorObject(404, 'Category not found');
  }
};

module.exports = existActivity;
