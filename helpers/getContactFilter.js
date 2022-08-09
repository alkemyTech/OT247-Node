const { Contact } = require('../models');

const getContactsForBO = async () => {
  try {
    const Contacts = await Contact.findAll({
      attributes: {
        exclude: ['message', 'createdAt', 'updatedAt', 'deletedAt'],
      },
    });
    return Contacts;
  } catch (error) {
    throw new ErrorObject(404, 'Contacts not found');
  }
};

module.exports = { getContactsForBO };
