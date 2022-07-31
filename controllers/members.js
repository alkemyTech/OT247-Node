const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const { getMembersService } = require('../services/members');

module.exports = { 
  getMembers: catchAsync(async (req, res) => {
    try {
      const members = await getMembersService();
      endpointResponse({
        res,
        message: 'Members loaded successfully',
        body: members,
    });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error loading members] - [members - GET]: ${error.message}`,
      );
      next(httpError);
    };
  })
};
