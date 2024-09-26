import { Schema,model,Types } from "mongoose";
import { CourseEntity } from "../../../../domain/entities";

const lessonSchema = new Schema({
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

const trialSchema = new Schema({
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
        required:true
    }
})

const courseSchma  = new Schema({
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
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    categoryRef: {
        type: Types.ObjectId,
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
            enum: ["free","paid"],
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
        enum: ["requested","rejected","accepted"],
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
},{
    timestamps: true
});

export const course = model<CourseEntity>("courses",courseSchma)