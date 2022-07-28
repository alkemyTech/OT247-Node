const { Contact } = require('../models');

const ErrorObject = require('../helpers/error');

//Create a new contact
const createContact = async (body) => {
  try {
    const { name, phone, email, message } = body;

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
  createContact,
};
