var express = require('express');
var router = express.Router();
const { deleteUserById, getUsers } = require('../controllers/users');

/* GET users listing. */
router.get('/', isAdmin, getUsers);

//DELETE delete user
router.delete('/:id', deleteUserById);



module.exports = router;
