const bcrypt = require('bcrypt');
const { User } = require('../models'); 
const { validationResult } = require('express-validator');

const userLogin = async (req, res) => {
  const errors = validationResult(req);
  
  if(!errors.isEmpty()){
    res.status(400).send('ok: false');
  }else{
    const {Email} = req.body;
    const userFinded = await User.findOne({ where: {email: Email}});

    if(userFinded === null){
      res.status(400).send('email or password doesnt match');
    }else{
      const match = await bcrypt.compare(req.body.Password, userFinded.password);

      if(match){
        res.status(200).send(userFinded);
      }else{
        res.status(400).send('ok: false');
      }
    }
  }
}

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

module.exports = { deleteUserById , userLogin};
