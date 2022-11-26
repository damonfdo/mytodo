import mongoose from "mongoose"



const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    is_verified: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

var User = mongoose.model('User', userSchema)

export default User