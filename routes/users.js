var express = require('express');
var router = express.Router();
const { deleteUserById, updateUser } = require('../controllers/users');
const { userExists } = require('../middlewares/userExists');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator')
const { user } = require('../schemas/updateUser')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.route('/:id')
  .patch(userExists, schemaValidator(user),  updateUser)
  .delete(deleteUserById)

module.exports = router;
