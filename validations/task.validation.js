const { check } = require('express-validator');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const TaskModel = require('../models/task.model');
exports.addTaskValidator = [
    check('name')
        .notEmpty()
        .withMessage('Task name is required')
        .isLength({ min: 3 })
        .withMessage('Too short task name'),



    check('description')
        .isLength({ min: 5 })
        .withMessage('Too short task description'),

    validationMiddleware,
];

exports.updateTaskValidator = [
    check('taskId')
        .notEmpty()
        .withMessage('Task ID is required')
        .isLength({ min: 1 })
        .withMessage('Too short task ID')
        .custom(async (val) => {
            await TaskModel.findById(val).then(task => {
                if (!task) {
                    return Promise.reject(new Error('This task not exist'))
                }
            }).catch(err => {
                console.error(err)
            })
        }),

    check('name')
        .notEmpty()
        .withMessage('Task name is required')
        .isLength({ min: 3 })
        .withMessage('Too short task name'),



    check('description')
        .isLength({ min: 5 })
        .withMessage('Too short task description'),

    validationMiddleware,
];


