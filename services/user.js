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

const updateUserService = async (id, userData) => {
  try {
    return await User.update(userData , { where: { id } });
  } catch (err) {
    return { error: err };
  }
};

module.exports = {
    registerUser,
    deleteUserService,
    updateUserService
}
