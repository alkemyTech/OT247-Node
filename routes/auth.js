var express = require('express');
var router = express.Router();

const {authUser} = require('../controllers/users');

router.post('/login', authUser);

module.exports = router;