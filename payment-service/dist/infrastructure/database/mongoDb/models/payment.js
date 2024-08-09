"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const paymentSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    instructorRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.Payment = (0, mongoose_1.model)("payments", paymentSchema);
