const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { generateJWT } = require('../helpers/generateJWT');
const welcomeMail = require('../mail-templates/mail-templates');
const sendMail = require('../services/sendgrid');

const usersService = require('../services/user');

module.exports = {
  getUsers: catchAsync(async (req, res, next) => {
    try {
      const users = await usersService.getUsersService();
      endpointResponse({
        res,
        message: 'Users loaded successfully',
        body: users,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error loading users] - [users - GET]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  userLogin: catchAsync(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userLoged = await usersService.userLoginService(email, password);

      const token = generateJWT(
        userLoged.id,
        userLoged.firstName,
        userLoged.lastName,
        userLoged.roleId,
      );

      endpointResponse({
        res,
        message: 'User login success',
        body: userLoged,
        token,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error user login] - [users - POST]: ${err.message}`,
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

  userRegister: catchAsync(async (req, res, next) => {
    try {
      const { body } = req;

      // Encrypt password
      const encryptedPassword = bcrypt.hashSync(body.password, 10);
      body.password = encryptedPassword;
      body.roleId = 1;

      // Create an user
      const users = await usersService.registerUser(body);

      // Generate JWT to login a user
      const {
        id, firstName, lastName, roleId,
      } = users;
      const token = generateJWT(id, firstName, lastName, roleId);

      // Send welcome email
      sendMail({
        email: body.email,
        subject: 'Welcome to the app',
        title: `Welcome ${body.firstName} ${body.lastName} to Alkemy ONG system`,
        text: 'It´s a pleasure to us that you register in our system. Welcome to our ONG system here you will know all of our information about activities, members, organizations and roles of the  organization',
        templateId: welcomeMail(),
      });

      // Server response
      endpointResponse({
        res,
        message: 'Users created successfully',
        body: users,
        token,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating user] - [users - POST]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  updateUser: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;

      const { firstName, lastName, photo } = req.body;
      const users = await usersService.updateUserService(id, { firstName, lastName, photo });

      endpointResponse({
        res,
        message: 'User updated successfully',
        body: users,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating user] - [users - PUT]: ${err.message}`,
      );
      next(httpError);
    }
  }),

  deleteUserById: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const integerId = Number.isInteger(parseInt(id, 10));

      // Checks that id param is a integer
      if (!integerId) {
        res.status(412).send('id param has to be a integer');
        return;
      }

      // User to eliminate
      const user = await usersService.deleteUserService(id);
      endpointResponse({
        res,
        message: 'User deleting successfully',
        body: user,
      });
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting user] - [users - DELETE]: ${err.message}`,
      );
      next(httpError);
    }
  }),
};
