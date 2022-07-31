const express = require('express');
const router = express.Router();

const { getMembers } = require('../controllers/members');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator');
//const { member } = require('../schemas/member');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', verify, isAdmin, getMembers);

module.exports = router;