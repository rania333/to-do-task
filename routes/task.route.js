const express = require('express')
const { addTaskController, updateTaskController, getAllTasksController } = require('../controllers/task.controller')
const { addTaskValidator, updateTaskValidator } = require('../validations/task.validation')
const router = express.Router()

// Routes
router.route('/')
    .post(addTaskValidator, addTaskController)
    .put(updateTaskValidator, updateTaskController)
    .get(getAllTasksController)

module.exports = router