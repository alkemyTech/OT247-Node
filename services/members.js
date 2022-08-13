const { Member } = require('../models');
const { ErrorObject } = require('../helpers/error');
const { paginate } = require('../helpers/paginate');

const getMembersService = async (query) => {
  try {
    const members = await paginate(query, 'members', Member);

    if (!members) { throw new ErrorObject(404, 'Members not found'); }

    return members;
  } catch (error) {
    throw new ErrorObject(error.statusCode, error.message);
  }
};

module.exports = { getMembersService };
