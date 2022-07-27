const express = require('express')
const router = express.Router()
const { isAdmin } = require('../middlewares/isAdmin')
const { deleteActivity } = require('../controllers/activities')

router.delete('/:id', isAdmin, deleteActivity)

module.exports = router