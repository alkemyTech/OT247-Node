const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const membersService = require('../services/members');

module.exports = {
  getMembers: catchAsync(async (req, res, next) => {
    try {
      const { query } = req;
      const members = await membersService.getMembersService(query);

      endpointResponse({
        res,
        message: 'Members loaded successfully',
        body: members,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error loading members] - [members - GET]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  createMember: async (req, res, next) => {
    try {
      const { body } = req;

      // Create a member
      const members = await membersService.createMember(body);

      return endpointResponse({
        res,
        message: 'Member created successfully',
        body: members,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating members] - [members - POST]: ${err.message}`,
      );
      next(httpError);
    }
  },

  updateMember: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;

      const members = await membersService.updateMember(id, body);

      return endpointResponse({
        res,
        message: 'Member updated successfully',
        body: members,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating members] - [members - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  deleteMemberById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      await membersService.deleteMemberByIdService(id);

      return endpointResponse({
        res,
        message: 'Member deleted successfully',
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting members] - [members - DELETE]: ${err.message}`,
      );
      next(httpError);
    }
  }),
};
