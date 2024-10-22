"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "instructor", "admin"],
        default: "student"
    },
    profile: {
        avatar: {
            type: String,
        },
        dateOfBirth: {
            type: String
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"]
        }
    },
    contact: {
        additionalEmail: {
            type: String,
        },
        socialMedia: {
            instagram: String,
            linkedIn: String,
            github: String
        }
    },
    mobile: {
        type: String
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    profession: {
        type: String
    },
    otp: {
        type: String
    },
    profit: {
        type: Number,
        default: 0
    },
    profileDescription: {
        type: String,
    },
    approved: {
        type: Boolean
    },
    stage: {
        type: String,
        enum: ["not-requested", "applied", "rejected", "accepted"],
        default: "not-requested",
    },
    rejectreason: {
        type: String
    },
    fcmTokens: {
        type: String,
    }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)("users", userSchema);
