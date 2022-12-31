const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'name required'],
        },
        description: {
            type: String,
            trim: true,
            min: 10
        },
        status: {
            type: Boolean, // true for completed | false otherwise
            default: false,
        },
        userId: {
            type: Number,
            lowercase: true,
        },

    },
    { timestamps: true }
);


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;