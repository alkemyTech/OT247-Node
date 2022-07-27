var express = require('express');
var router = express.Router();

const getToken = require('../helpers/getToken');
const {userLogin, verifyTokenUser} = require('../controllers/users');

router.get('/me', getToken, verifyTokenUser);
router.post('/login', userLogin);

module.exports = router;