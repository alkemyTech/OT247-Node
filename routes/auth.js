const express = require('express');
const router = express.Router();

const getToken = require('../helpers/getToken');
const { userRegister, verifyTokenUser, userLogin } = require('../controllers/users')
const { schemaValidator } = require('../middlewares/validator')
const { user } = require('../schemas/user')

router.post("/register", schemaValidator(user), userRegister)

router.get('/me', getToken, verifyTokenUser);
router.post('/login', userLogin);


module.exports = router;