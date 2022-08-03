const express = require('express');
const router = express.Router();

const { deleteMemberById } = require('../controllers/members');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator');
//const { member } = require('../schemas/member');
const { isAdmin } = require('../middlewares/isAdmin');
const { memberExists } = require('../middlewares/memberExists');

router.delete('/:id', verify, isAdmin, memberExists, deleteMemberById);

module.exports = router; 