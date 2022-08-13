const express = require('express');
const controller = require('../controllers/members');
const schema = require('../schemas/member');
const { schemaValidator } = require('../middlewares/validator');
const { isAdmin } = require('../middlewares/isAdmin');
const { memberExists } = require('../middlewares/memberExists');

const router = express.Router();

router
  .post('/', schemaValidator(schema.createMember), controller.createMember)

  .put('/:id', memberExists, schemaValidator(schema.updateMember), controller.updateMember);

router
  .use(isAdmin)
  .get('/', controller.getMembers)

  .delete('/:id', memberExists, controller.deleteMemberById);

module.exports = router;
