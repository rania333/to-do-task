const express = require('express')
const { addTaskController, updateTaskController, getOneTaskController, deleteTaskController } = require('../controllers/task.controller')
const { addTaskValidator, updateTaskValidator, specificTaskValidator, deleteTaskValidator } = require('../validations/task.validation')
const router = express.Router()

// Routes

router.get('/:taskId', specificTaskValidator, getOneTaskController)
router.route('/')
    .post(addTaskValidator, addTaskController)
    .put(updateTaskValidator, updateTaskController)
    .delete(deleteTaskValidator, deleteTaskController)

module.exports = router