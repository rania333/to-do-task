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