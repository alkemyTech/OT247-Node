const bcrypt = require('bcrypt');

const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
// const welcomeMail = require('../mail-templates/mail-templates')

const {
  registerUser,
  deleteUserService,
  updateUserService,
  userLoginService,
  getUsersService,
} = require('../services/user')

const {
  sendMail,
} = require('../services/sendgrid')


module.exports = {
  userRegister: catchAsync(async (req, res, next) => {
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
        
          sendMail({
            email: body.email,
            subject: 'Welcome to the app',
            //template: welcomeMail(user),
            templateId: 'd-4792e3fb740e47ad94ced288fdaf98f8'
          })
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error creating user] - [users - POST]: ${error.message}`,
          );
          next(httpError) 
        }
      }),
  deleteUserById: async (req, res) => {
      try {
        const { id } = req.params;
        const integerId = Number.isInteger(parseInt(id));

        //Checks that id param is a integer
        if (!integerId) {
          res.status(412).send('id param has to be a integer');
          return;
        }

        // User to eliminate
        const deletedUser = await deleteUserService(id);
        deletedUser == 1
          ? res.status(200).send('user deleted')
          : res.status(404).send('user not found');
      } catch (err) {
        res.status(400).send('an error has occurred');
      }
    },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params

      const { firstName, lastName, photo } = req.body
      await updateUserService(id , { firstName, lastName, photo })
  
      endpointResponse({ res, message: 'User updated successfully' }) 
      } catch (err) {
        res.status(500).json({ msg: err.message })
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await getUsersService();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).send('an error has occurred');
    };
  },
  userLogin: catchAsync ( async(req, res, next) => {
    try{
      const {email, password} = req.body;
      const result = await userLoginService(email, password);
      endpointResponse({
        res,
        message: 'User login success',
        body: result
      });

    }catch(error){
      const httpError = createHttpError(
        error.statusCode,
        `[Error user login] - [users - POST]: ${error.message}`,
      );
      next(httpError);
    }
  }),
};
