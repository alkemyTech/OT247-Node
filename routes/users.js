const express = require('express');
const controller = require('../controllers/users');
const schema = require('../schemas/updateUser');
const { isAdmin } = require('../middlewares/isAdmin');
const { schemaValidator } = require('../middlewares/validator');
const { userExists } = require('../middlewares/userExists');

const router = express.Router();

router
  .patch('/:id', userExists, schemaValidator(schema.user), controller.updateUser)
  .delete('/:id', controller.deleteUserById);

router
  .use(isAdmin)
  .get('/', controller.getUsers);

module.exports = router;
