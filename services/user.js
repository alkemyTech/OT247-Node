const bcrypt = require('bcrypt');
const { ErrorObject } = require('../helpers/error')
const { User } = require('../models')

const registerUser = async (body) => {
    try{
        const user = await User.create(body)
        return user
    }catch(error){
        throw new ErrorObject(error.message, error.statusCode || 500)
    };
};

const deleteUserService = async (id) => {
  try {
    return await User.destroy({ where: { id } });
  } catch (err) {
    return { error: err };
  }
};

const userLoginService = async (email, password) => {
    try{
        const userFinded = await User.findOne({ where: {email}});
        if(userFinded === null){
            throw new ErrorObject('email or password doesnt match', 400)
        }
        
        const match = await bcrypt.compare(password, userFinded.password);

        if(match){
            return userFinded;
        }else{
            throw new ErrorObject('ok:false', 400)
        }

    }catch(error){
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
  }
  

module.exports = {
    registerUser,
    deleteUserService,
    userLoginService
}