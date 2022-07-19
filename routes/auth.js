const express = require('express');
const router = express.Router();

const { userRegister } = require('../controllers/users')
const { schemaValidator } = require('../middlewares/validator')
const { user } = require('../schemas/user')

router.post("/register", schemaValidator(user), userRegister)

module.exports = router;