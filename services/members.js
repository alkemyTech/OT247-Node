const { Member } = require('../models');
const { ErrorObject } = require('../helpers/error');

const getMembersService = async () => {
  try {
    const members = await Member.findAll();
    if (!members) { throw new ErrorObject( 404, 'Members not found') };

    return members;
  } catch (error) {
    throw new ErrorObject(error.statusCode, error.message);
  };
};

module.exports = { getMembersService };