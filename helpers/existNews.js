const { News } = require('../models');
const { ErrorObject } = require('./error');

const existNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const news = await News.findOne({ where: { id } });

    if (!news) return res.status(404).json({ msg: 'This news does not exist' });

    return next();
  } catch (err) {
    throw new ErrorObject(404, 'News not found');
  }
};

module.exports = { existNews };
