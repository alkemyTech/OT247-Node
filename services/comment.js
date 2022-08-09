const { Comment } = require('../models');

const { ErrorObject } = require('../helpers/error');

const getCommentsServices = async () => {
  try {
    const allComments = await Comment.findAll({
      atributes: ['comment'],
      order: ['createdAt', 'DESC'],
    });
    if (!allComments) throw new ErrorObject('Comments not found', 404);
    return allComments;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports = { getCommentsServices };
