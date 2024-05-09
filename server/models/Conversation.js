import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Sender id field is required"],
        ref: "User"
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Receiver id field is required"],
        ref: "User"
    },
    messsages: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Message field is required"],
        ref: "Message"
    }
}, {
    timestamps: true
})

export default  mongoose.model('Conversation', conversationSchema)
