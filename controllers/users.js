const bcrypt = require('bcrypt');

const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
// const welcomeMail = require('../mail-templates/mail-templates')

const {
  registerUser,
  deleteUserService,
  updateUserService
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
            // template: welcomeMail(user),
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
      const { id } = req.params;
      const { userId } = req.user

      if (Number(id) !== userId) 
        return res.status(403).json({ msg: 'You are not authorized to perform this action' })
  
      const { firstName, lastName, photo } = req.body

      if (!firstName && !lastName && !photo)
        return res.status(400).json({ msg: 'You have not made any changes' })
  
      await updateUserService(userId , { firstName, lastName, photo })
  
      endpointResponse({ res, message: 'User updated successfully' }) 
      } catch (err) {
        res.status(500).json({ msg: err.message })
    }
  }
};
