const TaskModel = require('../models/task.model')
class Task {
    addNewTask = async (taskDetails, userId) => {
        await TaskModel.create({
            ...taskDetails, userId
        })
    }

    updateTask = async (taskDetails) => {
        // Extract data
        const { taskId, ...taskInfo } = taskDetails
        const updatedTask = await TaskModel.findOneAndUpdate(
            { _id: taskId },
            { ...taskInfo },
            { new: true }
        )

        console.log('test>>', updatedTask)
    }


}

module.exports = Task