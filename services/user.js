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

module.exports = {
    registerUser
}