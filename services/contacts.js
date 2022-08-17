const { Contact } = require('../models');
const { ErrorObject } = require('../helpers/error');

const getContacts = async () => {
  try {
    const allContacts = await Contact.findAll({
      attributes: {
        exclude: [
          'email',
          'createdAt',
          'updatedAt',
          'deletedAt',
        ],
      },
    });
    return allContacts;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

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

const createContact = async (body) => {
  try {
    const {
      name, phone, email, message,
    } = body;

    return await Contact.create({
      name,
      phone,
      email,
      message,
    });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
  }
};

module.exports = {
  getContacts,
  getContactsForBO,
  createContact,
};
