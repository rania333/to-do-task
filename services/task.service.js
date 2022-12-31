const TaskModel = require('../models/task.model')
class Task {
    addNewTask = async (taskDetails, userId) => {
        const createdTask = await TaskModel.create({
            ...taskDetails, userId
        })


        
    }
}

module.exports = Task