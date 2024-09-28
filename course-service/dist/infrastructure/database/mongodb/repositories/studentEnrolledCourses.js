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
            const progress = enrollment === null || enrollment === void 0 ? void 0 : enrollment.progress;
            const lessonProgress = progress === null || progress === void 0 ? void 0 : progress.lessonProgress;
            if (!lessonProgress || lessonProgress.length === 0) {
                return Object.assign(Object.assign({}, enrollment.toObject()), { completionPercentage: '0.00' });
            }
            const completedLessons = lessonProgress.filter((lesson) => lesson.isCompleted).length;
            const totalLessons = enrollment.courseId.lessons.length;
            const completionPercentage = ((completedLessons / totalLessons) * 100).toFixed(2);
            return Object.assign(Object.assign({}, enrollment.toObject()), { completionPercentage });
        });
        return enrollmentsWithCompletion;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.studentEnrolledCourses = studentEnrolledCourses;
