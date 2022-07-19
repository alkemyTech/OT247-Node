const { User } = require('../models');

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const integerId = Number.isInteger(parseInt(id));

    //Checks that id param is a integer
    if (!integerId) {
      res.status(412).send('id param has to be a integer');
      return;
    }

    // User to eliminate
    const deletedUser = await User.destroy({ where: { id } });
    deletedUser == 1
      ? res.status(200).send('user deleted')
      : res.status(404).send('user not found');
  } catch (err) {
    res.status(400).send('an error has occurred');
  }
};

module.exports = {
  findUserByEmail: async (email) => {
    try {
      // User to eliminate
      const findedUser = await findUserService(email);
      typeof findedUser != 'undefined'
        ? console.log('user finded');
        : console.log('user not found');
    } catch (err) {
      console.log('an error has occurred');
    }
  },
};