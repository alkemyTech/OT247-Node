const express = require('express');
const controller = require('../controllers/root');

const router = express.Router();

router
  .get('/', controller.root);

module.exports = router;
