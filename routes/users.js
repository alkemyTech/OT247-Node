var express = require('express');
var router = express.Router();
const { deleteUserById, updateUser } = require('../controllers/users');
const { userExists } = require('../middlewares/userExists');
const { verify } = require('../middlewares/verifyToken');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.route('/:id')
  .patch(verify, userExists, updateUser)
  .delete(deleteUserById)

module.exports = router;
