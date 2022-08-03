const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { ErrorObject } = require('../helpers/error');
const memberService = require('../services/member');
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
  }),
  
  createMember: async (req, res) => {
    try {
      const { body } = req;

      // Create a member
      const member = await memberService.createMember(body);

      return endpointResponse({
        res,
        message: 'Member created successfully',
        body: member,
      });
    } catch (err) {
      const error = new ErrorObject(err.message, err.statusCode || 400, err.errors || err.stack);
      return res.json(error);
    }
  },
};
