const express = require('express');

const router = express.Router();
const { getUsers, updateUser, deleteUserById } = require('../controllers/users');
const { userExists } = require('../middlewares/userExists');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator');
const { user } = require('../schemas/updateUser');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', verify, isAdmin, getUsers);

router.route('/:id')
  .patch(userExists, schemaValidator(user), updateUser)
  .delete(deleteUserById);

module.exports = router;
