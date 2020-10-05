const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
            // ref allows us to create a reference from this field to another model.
        },
    },
    {
        timestamps: true,
    }
)

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
