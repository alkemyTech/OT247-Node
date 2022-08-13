const express = require('express');
const controller = require('../controllers/users');
const schema = require('../schemas/user');
const { schemaValidator } = require('../middlewares/validator');
const getToken = require('../helpers/getToken');

const router = express.Router();

router
  .get('/me', getToken, controller.verifyTokenUser)
  .post('/login', controller.userLogin)
  .post('/register', schemaValidator(schema.user), controller.userRegister);

module.exports = router;
