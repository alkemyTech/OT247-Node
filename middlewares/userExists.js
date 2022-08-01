const { User } = require('../models');

const userExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).json({ msg: 'This user does not exist' });

    return next();
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

module.exports = { userExists };
