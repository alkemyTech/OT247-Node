const express = require('express');
const controller = require('../controllers/comments');
const { isAuthorized } = require('../middlewares/isAuthorizedComment');

const router = express.Router();

router
  .delete('/:id', isAuthorized, controller.deleteCommentById);

module.exports = router;
