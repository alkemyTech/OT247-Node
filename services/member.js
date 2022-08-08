const { Member } = require('../models');
const { ErrorObject } = require('../helpers/error');

const deleteMemberByIdService = async (id) => {
  try {
    return await Member.destroy({ where: { id } });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
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

module.exports = { createMember, deleteMemberByIdService, updateMember };
