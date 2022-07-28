const express = require('express');
const router = express.Router();

const getToken = require('../helpers/getToken');
const { userLogin, verifyTokenUser, userRegister } = require('../controllers/users');
const { schemaValidator } = require('../middlewares/validator')
const { user } = require('../schemas/user')

router.get('/me', getToken, verifyTokenUser);
router.post('/login', userLogin);
router.post("/register", schemaValidator(user), userRegister);

module.exports = router;