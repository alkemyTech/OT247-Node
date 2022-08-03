const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const { getPublicOrgService, updateOrganization } = require('../services/organization');

module.exports = {
  getPublicOrganization: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const organization = await getPublicOrgService(id);

      endpointResponse({
        res,
        message: 'Users created successfully',
        body: organization,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error get organization] - [organization - GET]: ${error.message}`,
      );
      next(httpError);
    }
  }),
  updatePublicOrganization: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const organization = await updateOrganization(id, body);

      endpointResponse({
        res,
        message: 'Users created successfully',
        body: organization,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error update organization] - [organization - PATH]: ${error.message}`,
      );
      next(httpError);
    }
  }),
};
