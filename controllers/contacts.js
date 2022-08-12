const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const welcomeMail = require('../mail-templates/mail-templates');
const sendMail = require('../services/sendgrid');

const contactsService = require('../services/contacts');

module.exports = {
  getAllContacts: catchAsync(async (req, res, next) => {
    try {
      const allContacts = await contactsService.getContacts();
      endpointResponse({
        res,
        message: 'Contacts finded',
        body: allContacts,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error loading contacts] - [contacts - GET]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  createContact: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;
      const contact = await contactsService.createContact(body);

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
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating contact] - [contacts - POST]: ${err.message}`,
      );
      next(httpError);
    }
  }),
};
