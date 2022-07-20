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

module.exports = { deleteUserById };

module.exports = {
  findUserByEmail: async (email, req, res) => {
    try {
      // User to eliminate
      const findedUser = await findUserService(email);
      if(!findedUser){
        res.json({ status: 404 }).json({ message: 'User not found' });
      }
    } catch (err) {
      res.json({ status: 500 }).json({ message: err });
    }
  },
}; 