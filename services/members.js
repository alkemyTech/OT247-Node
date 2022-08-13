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

const createMember = async (body) => {
  try {
    const {
      name, facebookUrl, instagramUrl, linkedinUrl, image, description,
    } = body;

    return await Member.create({
      name,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      image,
      description,
    });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
  }
};

const updateMember = async (id, body) => {
  try {
    const {
      name, description, image, facebookUrl, instagramUrl, linkedinUrl,
    } = body;

    return await Member.update({
      name,
      description,
      image,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
    }, { where: { id } });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
  }
};

const deleteMemberByIdService = async (id) => {
  try {
    return await Member.destroy({ where: { id } });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
  }
};

module.exports = {
  getMembersService,
  createMember,
  updateMember,
  deleteMemberByIdService,
};
