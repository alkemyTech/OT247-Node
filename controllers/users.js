const bcrypt = require('bcrypt');

const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

const {
  registerUser,
} = require('../services/user')


module.exports = {
    post: catchAsync(async (req, res, next) => {
        try {
          const { body } = req
    
          const encryptedPassword = bcrypt.hashSync(body.password, 10)
          body.password = encryptedPassword
          body.roleId = 1
    
          const users = await registerUser(body)
          endpointResponse({
            res,
            message: 'Users created successfully',
            body: users,
          }) 
        
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error creating user] - [users - POST]: ${error.message}`,
          );
          next(httpError) 
        }
      }),
};

/*     register: async(req, res, next) => {
        try{
        const { firstName, lastName, email, password, photo, roleId } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: passwordHash,
            photo,
            roleId
        })

        res.status(201).json({  
            message: 'User created successfully',
            data: newUser
        })
        }catch(err){
            console.log(err);
            next();
        }
    }  */
