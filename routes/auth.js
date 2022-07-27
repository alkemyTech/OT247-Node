const express = require('express');
const router = express.Router();

const { userRegister, userLogin } = require('../controllers/users')
const { schemaValidator } = require('../middlewares/validator')
const { user } = require('../schemas/user')

router.post("/register", schemaValidator(user), userRegister)

router.post('/login', userLogin);


module.exports = router;