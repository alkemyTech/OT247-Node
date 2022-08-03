const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');
const { catchAsync } = require('../helpers/catchAsync');
const { deleteMemberByIdService } = require('../services/member');

module.exports = {
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
  })
};