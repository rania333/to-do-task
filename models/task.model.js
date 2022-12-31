const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'name required'],
        },
        status: {
            type: Boolean, // true for completed | false otherwise
            default: false,
        },
        user: {
            type: number,
            lowercase: true,
        },

    },
    { timestamps: true }
);


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;