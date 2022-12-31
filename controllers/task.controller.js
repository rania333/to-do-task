const Task = require('../services/task.service')
const task = new Task()
exports.addTaskController = async (req, res, nxt) => {
    try {
        // Get data
        const taskDetails = req.body

        // Call task service
        await task.addNewTask(taskDetails, 1)

        res.status(201).send({ message: 'task is added successfully' })
    } catch (err) {
        nxt(err)
    }
}


exports.updateTaskController = async (req, res, nxt) => {
    try {
        // Get data
        const taskDetails = req.body
        // Call task service
        const updatedTask = await task.updateTask(taskDetails)
        if (!updatedTask) {
            return nxt({ statusCode: 404, message: 'Task not found' })
        }

        res.status(200).send({ message: 'task is updated successfully' })
    } catch (err) {
        nxt(err)
    }
}


exports.getOneTaskController = async (req, res, nxt) => {
    try {
        // Get data
        const { taskId } = req.params
        // Call task service
        const taskInfo = await task.getSpecificTask(1, taskId)
        if (!taskInfo || !taskInfo.length) {
            return nxt({ statusCode: 404, message: 'Task not found' })
        }

        res.status(200).send({ message: 'task is retrieved successfully', data: taskInfo })
    } catch (err) {
        nxt(err)
    }
}

exports.deleteTaskController = async (req, res, nxt) => {
    try {
        // Get data
        const { taskId } = req.body
        // Call task service
        const taskInfo = await task.deleteTask(taskId)
        if (!taskInfo) {
            return nxt({ statusCode: 404, message: 'Task not found' })
        }

        res.status(200).send({ message: 'task is deleted successfully' })
    } catch (err) {
        nxt(err)
    }
}

