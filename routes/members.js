const express = require('express');
const memberCtrl = require('../controllers/members');
const memberSchema = require('../schemas/member');
const { schemaValidator } = require('../middlewares/validator');

const router = express.Router();

// Create a member
router.post('/', schemaValidator(memberSchema.createMember), memberCtrl.createMember);

module.exports = router;
