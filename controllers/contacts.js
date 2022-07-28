const contactService = require('../services/contact');

const { endpointResponse } = require('../helpers/success');
const ErrorObject = require('../helpers/error');

module.exports = {
  createContact: async (req, res) => {
    try {
      const { body } = req;

      const contact = await contactService.createContact(body);

      return endpointResponse({
        res,
        message: 'Contact saved successfully',
        body: contact,
      });
    } catch (err) {
      const error = new ErrorObject(err.message, err.statusCode || 400, err.errors || err.stack);
      res.json(error);
    }
  },
};
