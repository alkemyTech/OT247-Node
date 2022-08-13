const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const contactService = require('../services/contacts');

module.exports = {
  getContactsBO: catchAsync(async (req, res, next) => {
    try {
      const leakedContacts = await contactService.getContactsForBO();
      endpointResponse({
        res,
        message: 'Leaked Contacts',
        body: leakedContacts,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error user login] - [contacts - GET]: ${err.message}`,
      );
      next(httpError);
    }
  }),
};
