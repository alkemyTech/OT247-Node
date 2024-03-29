const { Organization } = require('../models');
const { Slide } = require('../models');

const getPublicOrgService = async (id) => {
  try {
    return await Organization.findOne({
      attributes: ['name', 'image', 'phone', 'address', 'facebookUrl', 'instagramUrl', 'linkedinUrl'],
      where: { id },
      include: {
        model: Slide,
        attributes: ['imageUrl', 'text', 'order'],
      },
      order: [[Slide, 'order', 'ASC']],
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
        facebookUrl: body.facebookUrl,
        instagramUrl: body.instagramUrl,
        linkedinUrl: body.linkedinUrl,
      },
      { where: { id } },
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { getPublicOrgService, updateOrganization };
