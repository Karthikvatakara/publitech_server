"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.course = void 0;
const mongoose_1 = require("mongoose");
const lessonSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    attachments: {
        title: String,
        url: String
    }
});
const trialSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    }
});
const courseSchma = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    instructorRef: {
        type: mongoose_1.Types.ObjectId,
        ref: "users",
        required: true
    },
    categoryRef: {
        type: mongoose_1.Types.ObjectId,
        ref: "categories",
        required: true
    },
    language: {
        type: String,
        required: true
    },
    lessons: [lessonSchema],
    trial: trialSchema,
    pricing: {
        type: {
            type: String,
            enum: ["free", "paid"],
            default: "free"
        },
        amount: {
            type: Number,
            default: 0
        }
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    whatWillLearn: {
        type: [String]
    },
    stage: {
        type: String,
        enum: ["requested", "rejected,accepted"],
        default: "requested"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    rejectReason: {
        type: String
    },
    isPublished: {
        type: Boolean
    },
    isBlockedInstructor: {
        type: Boolean,
        default: false
    },
    noOfPurchases: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
exports.course = (0, mongoose_1.model)("courses", courseSchma);
