const { ErrorObject } = require('../helpers/error');

const { Contact } = require('../models');

const getContacts = async () => {
    try{
        const allContacts = await Contact.findAll({ attributes: { exclude: 'email'}});
        return allContacts;
    }catch(error){
        throw new ErrorObject(error.message, error.statusCode || 500);
    }
}

module.exports = getContacts;
