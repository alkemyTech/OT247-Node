const express = require('express');

const router = express.Router();

const { getMembers } = require('../controllers/members');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator');
const { isAdmin } = require('../middlewares/isAdmin');
const memberCtrl = require('../controllers/members');
const memberSchema = require('../schemas/member');

router.get('/', verify, isAdmin, getMembers);
router.post('/', schemaValidator(memberSchema.createMember), memberCtrl.createMember);

module.exports = router;
