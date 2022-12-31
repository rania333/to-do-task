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
        console.log('test02', taskDetails)
        // Call task service
        await task.updateTask(taskDetails)

        res.status(200).send({ message: 'task is updated successfully' })
    } catch (err) {
        nxt(err)
    }
}

exports.getAllTasksController = async (req, res, nxt) => {
    try {
        // Call task service
        const data = await task.getAllTask(1, req.query)

        res.status(200).send({ message: 'tasks are retrieved successfully', data, count: data.length })
    } catch (err) {
        nxt(err)
    }
}