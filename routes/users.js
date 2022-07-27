var express = require('express');
var router = express.Router();
const { getUsers, updateUser, deleteUserById } = require('../controllers/users');
const { userExists } = require('../middlewares/userExists');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator')
const { user } = require('../schemas/updateUser')
const { isAdmin } = require('../middlewares/isAdmin');

/* GET users listing. */
router.get('/',  isAdmin, getUsers);

router.route('/:id')
  .patch(userExists, schemaValidator(user),  updateUser)
  .delete(deleteUserById)



module.exports = router;
