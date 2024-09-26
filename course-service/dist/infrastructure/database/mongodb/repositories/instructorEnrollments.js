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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructorEnrollments = void 0;
const ErrorResponse_1 = __importDefault(require("../../../../_lib/common/error/ErrorResponse"));
const models_1 = require("../models");
const instructorEnrollments = (instructorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield models_1.course.find({ instructorRef: instructorId }).select('_id title thumbnail pricing.amount');
        if (!courses.length) {
            throw ErrorResponse_1.default.notFound("no courses found");
        }
        ;
        const courseIds = courses.map((course) => course._id);
        const enrollments = yield models_1.Enrollment.aggregate([
            { $match: { courseId: { $in: courseIds } } },
            { $group: { _id: "$courseId", enrollmentCount: { $sum: 1 } } },
        ]);
        const coursesWithEnrollments = courses.map((course) => {
            // Find the enrollment count for the current course
            const enrollmentData = enrollments.find((enrollment) => String(enrollment._id) === String(course._id));
            return {
                courseId: course._id,
                title: course.title,
                thumbnail: course.thumbnail,
                amount: course.pricing.amount,
                enrollmentCount: enrollmentData ? enrollmentData.enrollmentCount : 0 // If no enrollments, return 0
            };
        });
        coursesWithEnrollments.sort((a, b) => b.enrollmentCount - a.enrollmentCount);
        const limitedCourses = coursesWithEnrollments.slice(0, 5);
        return limitedCourses;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.instructorEnrollments = instructorEnrollments;
