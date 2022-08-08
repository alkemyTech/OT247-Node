const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');
const { catchAsync } = require('../helpers/catchAsync');
const { deleteMemberByIdService } = require('../services/member');
const memberService = require('../services/member');
const { getMembersService } = require('../services/members');

module.exports = {

  getMembers: catchAsync(async (req, res) => {
    try {
      const { query } = req;
      const members = await getMembersService(query);

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
    }
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

  deleteMemberById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;

      await deleteMemberByIdService(id);

      return endpointResponse({
        res,
        message: 'Member deleted successfully',
      });
    } catch (err) {
      const error = new ErrorObject(err.message, err.statusCode || 400, err.errors || err.stack);
      res.json(error);
    }
  }),
};
