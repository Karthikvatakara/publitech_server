"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const mongoose_1 = require("mongoose");
const resultSchema = new mongoose_1.Schema({
    assessmentRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "assessments",
        required: true
    },
    userRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    totalScore: {
        type: Number,
        required: true
    },
    isPassed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.Result = (0, mongoose_1.model)("results", resultSchema);
