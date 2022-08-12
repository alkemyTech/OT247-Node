const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const organizationsService = require('../services/organization');

module.exports = {
  getPublicOrganization: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const organization = await organizationsService.getPublicOrgService(id);

      endpointResponse({
        res,
        message: 'Organization created successfully',
        body: organization,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error get organization] - [organization - GET]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  updatePublicOrganization: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const organization = await organizationsService.updateOrganization(id, body);

      endpointResponse({
        res,
        message: 'Organization updating successfully',
        body: organization,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error update organization] - [organization - PATH]: ${err.message}`,
      );
      next(httpError);
    }
  }),
};
