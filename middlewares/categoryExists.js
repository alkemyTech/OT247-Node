const { Category } = require('../models');

const categoryExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({ where: { id } });
    if (!category) return res.status(404).json({ msg: 'This category does not exist' });

    next();
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { categoryExists };
