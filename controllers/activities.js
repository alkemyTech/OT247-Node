const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { parseIntId } = require('../helpers/parseIntId')

const { destroyActivity } = require('../services/activities')

module.exports = {
  deleteActivity: async (req, res, next) => {
    try {
      const { id } = req.params

      const deletedActivity = await destroyActivity(parseIntId(id))
      endpointResponse({
          res,
          message: 'Activity deleted successfully',
          body: deletedActivity,
      })
    }catch (error) {
      const httpError = createHttpError(
          error.statusCode,
          `[Error deleting activity] - [activities - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  }
} 
