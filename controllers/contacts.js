const createHttpError = require('http-errors');
const { getContacts } = require('../helpers/getContacts');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const contactService = require('../services/contact');
const { ErrorObject } = require('../helpers/error');
const welcomeMail = require('../mail-templates/mail-templates');
const sendMail = require('../services/sendgrid');

module.exports = {
  getAllContacts: catchAsync(async (req, res, next) => {
    try {
      const allContacts = await getContacts();
      endpointResponse({
        res,
        message: 'Contacts finded',
        body: allContacts,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error user login] - [contacts - POST]: ${error.message}`,
      );
      next(httpError);
    }
  }),

  createContact: async (req, res) => {
    try {
      const { body } = req;

      const contact = await contactService.createContact(body);

      // Send welcome email
      sendMail({
        email: body.email,
        subject: 'Welcome new contact',
        data: body,
        title: `Welcome ${body.name} new contact to Alkemy ONG system`,
        text: 'It´s a pleasure to us that you register your contact in our system, thanks you',
        templateId: welcomeMail(),
      });

      return endpointResponse({
        res,
        message: 'Contact saved successfully',
        body: contact,
      });
    } catch (err) {
      const error = new ErrorObject(err.message, err.statusCode || 400, err.errors || err.stack);
      return res.json(error);
    }
  },
};
