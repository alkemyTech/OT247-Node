const bcrypt = require('bcrypt');
const createHttpError = require('http-errors');
const jwt = require('jsonwebtoken');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { generateJWT } = require('../helpers/generateJWT');

// const welcomeMail = require('../mail-templates/mail-templates')

const {
  registerUser,
  deleteUserService,
  updateUserService,
  userLoginService,
  getUsersService,
} = require('../services/user');

const { sendMail } = require('../services/sendgrid');

module.exports = {
  userRegister: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;

      // Encrypt password
      const encryptedPassword = bcrypt.hashSync(body.password, 10);
      body.password = encryptedPassword;
      body.roleId = 1;

      // Create an user
      const users = await registerUser(body);

      // Generate JWT to login a user
      const {
        id, firstName, lastName, roleId,
      } = users;
      const token = generateJWT(id, firstName, lastName, roleId);

      // Send welcome email
      sendMail({
        email: body.email,
        subject: 'Welcome to the app',
        // template: welcomeMail(user),
        templateId: 'd-4792e3fb740e47ad94ced288fdaf98f8',
      });

      // Server response
      endpointResponse({
        res,
        message: 'Users created successfully',
        body: users,
        token,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating user] - [users - POST]: ${error.message}`,
      );
      next(httpError);
    }
  }),
  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const integerId = Number.isInteger(parseInt(id));

      // Checks that id param is a integer
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

      const { firstName, lastName, photo } = req.body;
      await updateUserService(id, { firstName, lastName, photo });

      endpointResponse({ res, message: 'User updated successfully' });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await getUsersService();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).send('an error has occurred');
    }
  },
  userLogin: catchAsync(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userLoged = await userLoginService(email, password);

      const token = generateJWT(userLoged.id, userLoged.firstName, userLoged.lastName, userLoged.roleId);
      endpointResponse({
        res,
        message: 'User login success',
        body: userLoged,
        token,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error user login] - [users - POST]: ${error.message}`,
      );
      next(httpError);
    }
  }),
  verifyTokenUser: (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, userInfo) => {
      if (error) {
        res.sendStatus(403);
      } else {
        endpointResponse({
          res,
          message: 'Token verified',
          body: userInfo,
        });
      }
    });
  },
};
