const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const { updateActivityById } = require('../services/activity');

module.exports = {
  updateActivity: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const integerId = parseInt(id, 10);

      const updatedActivity = await updateActivityById(integerId, req.body);
      endpointResponse({
        res,
        message: 'Activity updated successfully',
        body: updatedActivity,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating activity] - [activities - PUT]: ${error.message}`,
      );
      next(httpError);
    }
  }),

};
