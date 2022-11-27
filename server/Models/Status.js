import mongoose from "mongoose"

const statusSchema = mongoose.Schema({
    name: String,
    created_at: {
        type: Date,
        default: new Date()
    }
})

var Status = mongoose.model('Status', statusSchema)

export default Status