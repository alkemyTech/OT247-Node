const { Contact } = require('../models');

const getContacts = async() => {
    try{
        const Contacts = await Contact.findAll({ 
            attributes: { 
                exclude: ['email', 'createdAt', 'updatedAt', 'deletedAt']
            }
        });
        return Contacts;
    }catch(error){
        throw new ErrorObject(404, 'Contacts not found');
    }
}

module.exports = { getContacts };