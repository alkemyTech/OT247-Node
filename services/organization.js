const { Organization } = require('../models');

const getPublicOrgService = async (id) => {
  try {
    return await Organization.findOne({
      attributes: ['name', 'image', 'phone', 'address'],
      where: { id },
    });
  } catch (err) {
    return { error: err };
  }
};

module.exports = { getPublicOrgService };
