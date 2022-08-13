const { Member } = require('../models');

const memberExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await Member.findOne({ where: { id } });

    if (!member) return res.status(404).json({ msg: 'This member does not exist' });

    return next();
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

module.exports = { memberExists };
