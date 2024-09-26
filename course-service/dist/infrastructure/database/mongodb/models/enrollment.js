"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
const mongoose_1 = require("mongoose");
const LessonProgressSchema = new mongoose_1.Schema({
    lessonId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    totalTimeWatched: {
        type: Number,
        default: 0
    },
    lastWatchedPosition: {
        type: Number,
        default: 0
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});
const enrollmentSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "courses",
        required: true
    },
    enrolledAt: {
        type: mongoose_1.Schema.Types.Date,
        default: function () {
            return Date.now();
        }
    },
    progress: {
        completedLessons: [mongoose_1.Schema.Types.ObjectId],
        completedAssessments: [mongoose_1.Schema.Types.ObjectId],
        currentLesson: mongoose_1.Schema.Types.ObjectId,
        lessonProgress: [LessonProgressSchema]
    }
});
exports.Enrollment = (0, mongoose_1.model)("enrollments", enrollmentSchema);
