"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    sender: {
        type: mongoose_1.Types.ObjectId,
        ref: "users",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    chatId: {
        type: mongoose_1.Types.ObjectId,
        ref: "chats",
        required: true
    },
    contentType: {
        type: String,
        enum: ['text', 'image', 'audio', 'video', 'file'],
        default: 'text'
    },
    recieverSeen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.message = (0, mongoose_1.model)("messages", messageSchema);
