const express = require('express');

const router = express.Router();

const { deleteMemberById } = require('../controllers/members');
const { verify } = require('../middlewares/verifyToken');
const { schemaValidator } = require('../middlewares/validator');
const { isAdmin } = require('../middlewares/isAdmin');
const { memberExists } = require('../middlewares/memberExists');
const { getMembers } = require('../controllers/members');
const memberCtrl = require('../controllers/members');
const memberSchema = require('../schemas/member');

router.get('/', verify, isAdmin, getMembers);
router.post('/', schemaValidator(memberSchema.createMember), memberCtrl.createMember);
router.put('/:id', verify, memberExists, schemaValidator(memberSchema.updateMember), memberCtrl.updateMember);
router.delete('/:id', verify, isAdmin, memberExists, deleteMemberById);

module.exports = router;
