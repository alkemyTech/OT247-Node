var express = require('express');
var router = express.Router();
const { deleteUserById } = require('../controllers/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//DELETE delete user
router.delete('/:id', deleteUserById);

module.exports = router;
