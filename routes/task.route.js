const express = require('express')
const { addTaskController, updateTaskController, getOneTaskController } = require('../controllers/task.controller')
const { addTaskValidator, updateTaskValidator, specificTaskValidator } = require('../validations/task.validation')
const router = express.Router()

// Routes

router.get('/:taskId', specificTaskValidator, getOneTaskController)
router.route('/')
    .post(addTaskValidator, addTaskController)
    .put(updateTaskValidator, updateTaskController)

module.exports = router