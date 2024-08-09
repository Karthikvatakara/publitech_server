"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String
    }
}, {
    timestamps: true
});
exports.category = (0, mongoose_1.model)("categories", categorySchema);
