const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const activitiesService = require('../services/activity');

module.exports = {
  insertActivity: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;

      const activity = await activitiesService.insertActivity(body);
      endpointResponse({
        res,
        message: 'Activity created successfully',
        body: activity,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating activity] - [activities - POST]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  updateActivity: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const integerId = parseInt(id, 10);

      const activity = await activitiesService.updateActivityById(integerId, req.body);
      endpointResponse({
        res,
        message: 'Activity updated successfully',
        body: activity,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating activity] - [activities - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),
};
