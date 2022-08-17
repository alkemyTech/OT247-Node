const createHttpError = require('http-errors');
const { ErrorObject } = require('../helpers/error');

const isAuthorized = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    if (Number(id) !== userId) throw new ErrorObject('You are not authorized to perform this action', 401);

    return next();
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error] : ${error.message}`,
    );
    return next(httpError);
  }
};

module.exports = { isAuthorized };
