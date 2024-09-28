"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentEnrolledCourses = void 0;
const models_1 = require("../models");
const models_2 = require("../models");
const studentEnrolledCourses = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollments = yield models_1.Enrollment.find({ userId })
            .populate({
            path: 'courseId',
            model: models_2.course,
            select: 'title description thumbnail pricing lessons'
        });
        const enrollmentsWithCompletion = enrollments.map((enrollment) => {
            var _a, _b, _c, _d;
            const progress = enrollment === null || enrollment === void 0 ? void 0 : enrollment.progress;
            const lessonProgress = progress === null || progress === void 0 ? void 0 : progress.lessonProgress;
            const completedLessons = (lessonProgress === null || lessonProgress === void 0 ? void 0 : lessonProgress.filter((lesson) => lesson.isCompleted).length) || 0;
            const totalLessons = enrollment.courseId.lessons.length;
            const completionPercentage = ((completedLessons / totalLessons) * 100).toFixed(2);
            return {
                _id: enrollment._id.toString(),
                userId: enrollment.userId.toString(),
                courseId: {
                    _id: enrollment.courseId._id.toString(),
                    title: enrollment.courseId.title,
                    description: enrollment.courseId.description,
                    thumbnail: enrollment.courseId.thumbnail,
                    pricing: enrollment.courseId.pricing,
                    lessons: enrollment.courseId.lessons.map(lesson => (Object.assign(Object.assign({}, lesson), { _id: lesson._id.toString() })))
                },
                enrolledAt: enrollment.enrolledAt,
                progress: enrollment.progress ? {
                    completedLessons: (_a = enrollment.progress.completedLessons) === null || _a === void 0 ? void 0 : _a.map(id => id.toString()),
                    completedAssessments: (_b = enrollment.progress.completedAssessments) === null || _b === void 0 ? void 0 : _b.map(id => id.toString()),
                    currentLesson: (_c = enrollment.progress.currentLesson) === null || _c === void 0 ? void 0 : _c.toString(),
                    lessonProgress: (_d = enrollment.progress.lessonProgress) === null || _d === void 0 ? void 0 : _d.map(progress => (Object.assign(Object.assign({}, progress), { lessonId: progress.lessonId.toString() })))
                } : undefined,
                completionPercentage
            };
        });
        return enrollmentsWithCompletion;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.studentEnrolledCourses = studentEnrolledCourses;
