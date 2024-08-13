"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionPayment = void 0;
const mongoose_1 = require("mongoose");
const subscriptionPaymentSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    chatId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed", "failed", "refunded"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    subscriptionType: {
        type: String,
        enum: ["basic", "standard", "premium"]
    }
}, {
    timestamps: true
});
exports.subscriptionPayment = (0, mongoose_1.model)("subscriptionPayment", subscriptionPaymentSchema);
