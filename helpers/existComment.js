const { Comment } = require('../models');
const { ErrorObject } = require('./error');

const existComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findOne({ where: { id } });

    if (!comment) return res.status(404).json({ msg: 'This comment does not exist' });

    next();
  } catch (err) {
    throw new ErrorObject(404, 'Comment not found');
  }
};

module.exports = { existComment };
