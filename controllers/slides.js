const slidesService = require('../services/slides');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  deleteSlideById: async (req, res) => {
    try {
      const { id } = req.params;

      await slidesService.deleteSlideById(id);

      return endpointResponse({
        res,
        message: 'Slide deleted successfully',
      });
    } catch (err) {
      const error = new ErrorObject(err.message, err.statusCode || 400, err.errors || err.stack);
      res.json(error);
    }
  },
};
