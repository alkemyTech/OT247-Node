const { Comment } = require('../models');
const { ErrorObject } = require('../helpers/error');

const createNewComment = async (body) => {
  try {
    const { content, userId, newsId } = body;
    return await Comment.create({ content, userId, newsId });
  } catch (error) {
    throw new ErrorObject(error.message, 400, error);
  }
};

module.exports = { createNewComment };
