const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const chatModel = mongoose.model("Chat", chatSchema);

module.exports = chatModel;
