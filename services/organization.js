const { Organization } = require('../models');

const getPublicOrgService = async (id) => {
  try {
    return await Organization.findOne({
      attributes: ['name', 'image', 'phone', 'address', 'facebookUrl', 'instagramUrl', 'linkedinUrl'],
      where: { id },
    });
  } catch (err) {
    return { error: err };
  }
};

const updateOrganization = async (id, body) => {
  try {
    return await Organization.update(
      {
        name: body.name,
        image: body.image,
        address: body.address,
        phone: body.phone,
        email: body.email,
        welcomeText: body.welcomeText,
        aboutUsText: body.aboutUsText,
      },
      { where: { id } },
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { getPublicOrgService, updateOrganization };
