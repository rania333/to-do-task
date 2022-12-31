const express = require('express')
const { addTaskController, updateTaskController } = require('../controllers/task.controller')
const { addTaskValidator, updateTaskValidator } = require('../validations/task.validation')
const router = express.Router()

// Routes
router.route('/')
    .post(addTaskValidator, addTaskController)
    .put(updateTaskValidator, updateTaskController)

module.exports = router