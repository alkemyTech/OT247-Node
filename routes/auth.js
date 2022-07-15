var express = require('express');
var router = express.Router();

const { post } = require('../controllers/users')
const { schemaValidator } = require('../middlewares/validator')
const { user } = require('../schemas/user')

router.post("/register", schemaValidator(user), post)

module.exports = router;