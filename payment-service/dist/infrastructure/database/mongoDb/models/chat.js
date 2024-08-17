"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
            type: mongoose_1.Types.ObjectId,
            ref: "users",
            required: true
        }],
    latestMessage: {
        type: mongoose_1.Types.ObjectId,
        ref: "messages"
    },
    groupName: {
        type: String
    },
    groupAdmin: {
        type: mongoose_1.Types.ObjectId,
        ref: "users"
    },
    subscriptionType: {
        type: String,
        enum: ["none", "basic", "standard", "premium"],
        default: "none"
    }
}, {
    timestamps: true
});
exports.chat = (0, mongoose_1.model)("chats", chatSchema);
