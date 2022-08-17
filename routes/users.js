const express = require('express');
const controller = require('../controllers/users');
const schema = require('../schemas/updateUser');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { userExists } = require('../middlewares/userExists');
const { isAuthorized } = require('../middlewares/isAuthorizedUser');

const router = express.Router();

router
  .patch('/:id', userExists, isAuthorized, schemaValidator(schema.user), controller.updateUser)
  .delete('/:id', userExists, isAuthorized, controller.deleteUserById);

router
  .use(isAdmin)
  .get('/', controller.getUsers);

module.exports = router;
