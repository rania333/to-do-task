const express = require('express')
const { addTaskController } = require('../controllers/task.controller')
const { addTaskValidator } = require('../validations/task.validation')
const router = express.Router()

// Routes
router.post('/', addTaskValidator, addTaskController)


module.exports = router