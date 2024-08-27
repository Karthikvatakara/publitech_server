import { Schema, Types, model } from "mongoose";
import { assessmentEntity } from "../../../../domain/entities/assessmentEntity";

const questionSchema = new Schema({
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
})


const AssessmentSchema = new Schema({
    instructorId: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    courseId: {
        type: Types.ObjectId,
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
    questionScore : {
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
},{
    timestamps: true
})

export const Assessment = model<assessmentEntity>("assessments",AssessmentSchema)