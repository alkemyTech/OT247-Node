const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const { 
	updateNewsService 
  } = require('../services/news.js');

  module.exports = {
	  updateNews: catchAsync(async (req, res, next) => {
		try {
			const { id } = req.params;
      const integerId = Number.isInteger(parseInt(id));
      if (integerId) {	
        const updateNews = await updateNewsService(id, req.body);
        endpointResponse({
          res,
          message: 'News updated successfully'
        });
      } else {
        res.status(412).send('id param has to be a integer');
      };
		} catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating news] - [news - PUT]: ${error.message}`,
      );
      next(httpError)
    }	
	})
}