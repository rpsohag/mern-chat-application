import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password field is required"]
    },
    profile_photo: {
        type: String,
        default: null
    }
}, {
    timestamps: true
})

export default  mongoose.model('User', userSchema)
