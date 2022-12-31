const { check } = require('express-validator');
const { validationMiddleware } = require('../middlewares/validationMiddleware');

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


