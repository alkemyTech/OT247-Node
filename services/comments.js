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

const deleteCommentById = async (id) => {
  try {
    return await Comment.destroy({ where: { id } });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
  }
};

module.exports = {
  createNewComment,
  deleteCommentById,
};
