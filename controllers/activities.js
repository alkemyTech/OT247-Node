const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

const { insertActivity } = require('../services/activity')

module.exports = {
  activitiesRegister: catchAsync(async (req, res, next) => {
    try {
      const { body } = req

      const activity = await insertActivity(body)
      endpointResponse({
        res,
        message: 'Activity created successfully',
        body: activity,
      }) 
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating activity] - [activities - POST]: ${error.message}`,
      );
      next(httpError) 
    }
  })
}
