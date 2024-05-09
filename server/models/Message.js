import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ""
    },
    image_url: {
        type: String,
        default: ""
    },
    video_url: {
        type: String,
        default: ""
    },
    is_seen: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true
})

export default  mongoose.model('Message', messageSchema)
