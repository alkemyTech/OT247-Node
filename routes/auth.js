var express = require('express');
var router = express.Router();

const {userLogin} = require('../controllers/users');

router.post('/login', userLogin);

module.exports = router;