import { Schema,model } from "mongoose";
import { EnrollmentEntity } from "../../../../domain/entities/enrollmentEntity";

const LessonProgressSchema = new Schema ({
    lessonId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    totalTimeWatched: {
        type: Number,
        default: 0
    },
    lastWatchedPosition : {
        type: Number,
        default: 0
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

const enrollmentSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "courses",
        required: true
    },
    enrolledAt: {
        type: Schema.Types.Date,
        default: function () {
            return Date.now();
        }
    },
    progress: {
        completedLessons: [ Schema.Types.ObjectId ],
        completedAssessments: [ Schema.Types.ObjectId ],
        currentLesson: Schema.Types.ObjectId,  
        lessonProgress: [LessonProgressSchema]
    }   
})

export const Enrollment = model<EnrollmentEntity>("enrollments",enrollmentSchema)