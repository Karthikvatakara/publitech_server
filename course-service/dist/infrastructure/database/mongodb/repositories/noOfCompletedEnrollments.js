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
exports.noOfCompletedEnrollments = void 0;
const models_1 = require("../models");
const noOfCompletedEnrollments = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollments = yield models_1.Enrollment.find({ userId });
        const completedCourses = enrollments.filter((enrollment) => {
            var _a;
            const lessonProgress = (_a = enrollment === null || enrollment === void 0 ? void 0 : enrollment.progress) === null || _a === void 0 ? void 0 : _a.lessonProgress;
            return lessonProgress && lessonProgress.length > 0 && lessonProgress.every(lesson => lesson.isCompleted);
        });
        return completedCourses.length;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.noOfCompletedEnrollments = noOfCompletedEnrollments;
