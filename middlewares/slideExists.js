const { Slide } = require('../models');

const slideExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const slide = await Slide.findOne({ where: { id } });

    if (!slide) return res.status(404).json({ msg: 'This slide does not exist' });

    return next();
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

module.exports = { slideExists };
