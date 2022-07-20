const bcrypt = require('bcrypt');

const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const welcomeMail = require('../mail-templates/mail-templates')

const {
  registerUser,
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
            template: welcomeMail(user),
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
};
