const { User } = require('../models');

const deleteUserService = async (id) => {
  try {
    return await User.destroy({ where: { id } });
  } catch (err) {
    return { error: err };
  }
};

module.exports = { deleteUserService };
