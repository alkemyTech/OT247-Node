const { User } = require('../models');

const findUserService = async (email) => {
  try {
    return await User.findOne({ where: { email: email }, attributes: ['firstName', 'lastName'] });
  } catch (err) {
    return { error: err };
  }
};

module.exports = findUserService; 