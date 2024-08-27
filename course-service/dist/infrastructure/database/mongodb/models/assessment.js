"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assessment = void 0;
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true
    },
    options: [
        {
            option: {
                type: String,
                required: true
            }
        }
    ],
    answer: {
        type: String,
        required: true
    }
});
const AssessmentSchema = new mongoose_1.Schema({
    instructorId: {
        type: mongoose_1.Types.ObjectId,
        ref: "users",
        required: true
    },
    courseId: {
        type: mongoose_1.Types.ObjectId,
        ref: "courses",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "exam"
    },
    questions: [questionSchema],
    questionScore: {
        type: Number,
        required: true
    },
    totalScore: {
        type: Number,
        required: true
    },
    passingScore: {
        type: Number,
        required: true
    },
    numQuestions: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
exports.Assessment = (0, mongoose_1.model)("assessments", AssessmentSchema);
