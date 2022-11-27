import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    name: String,
    desc: String,
    attachment: String,
    status: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Status'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

var Task = mongoose.model('Task', taskSchema)

export default Task