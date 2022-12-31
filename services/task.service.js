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
        return updatedTask
    }

    getSpecificTask = async (userId, taskId) => {
        const userTask = await TaskModel.find({ userId, _id: taskId },
            { _id: 1, name: 1, description: 1, status: 1, userId: 1 })
        return userTask
    }

    deleteTask = async (taskId) => {
        const userTask = await TaskModel.findByIdAndRemove(taskId);
        console.log(userTask)
        return userTask
    }


    getAllTask = async (userId, paginationData) => {
        // Extract data
        const page = paginationData?.page || 1
        const limit = paginationData?.limit || 5

        const allUserTasks = await TaskModel.find({ userId },
            { _id: 1, name: 1, description: 1, status: 1, userId: 1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        return allUserTasks
    }

}

module.exports = Task