const { User } = require('../models');

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const integerId = Number.isInteger(parseInt(id));

    //Checks that id param is a integer
    if (!integerId) {
      res.status(412).send('debe enviar un entero como parametro');
      return;
    }

    // User to eliminate
    const deletedUser = await User.destroy({ where: { id } });
    deletedUser == 1
      ? res.status(200).send('usuario eliminado')
      : res.status(404).send('no se encontro el usuario');
  } catch (err) {
    res.status(400).send('ha ocurrido un error');
  }
};

module.exports = { deleteUserController };
