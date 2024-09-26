import { Schema, model } from "mongoose";
import { resultEntity } from "../../../../domain/entities/resultEntity";

const resultSchema = new Schema({
    assessmentRef: {
        type: Schema.Types.ObjectId,
        ref: "assessments",
        required: true
    },
    userRef: {
        type: Schema.Types.ObjectId,
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

export const Result = model<resultEntity>("results", resultSchema);   