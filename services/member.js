const { Member } = require('../models');
const { ErrorObject } = require('../helpers/error');

const deleteMemberByIdService = async (id) => {
  try {
    return await Member.destroy({ where: { id } });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
  }
};

module.exports = { deleteMemberByIdService };