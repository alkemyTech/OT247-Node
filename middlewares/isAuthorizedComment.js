const createHttpError = require('http-errors');
const { ErrorObject } = require('../helpers/error');
const { Comment } = require('../models');

const isAuthorized = async (req, res, next) => {
  try {
    const { id: userId, roleId } = req.user;
    const { id } = req.params;

    const comment = await Comment.findOne({ where: { id } });
    if (!comment) throw new ErrorObject('This comment does not exist', 404);

    if (userId !== comment.userId && roleId !== 1) throw new ErrorObject('You are not allowed to do this action', 401);

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
