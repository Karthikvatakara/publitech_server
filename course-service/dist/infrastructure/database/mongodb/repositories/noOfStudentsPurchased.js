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
exports.noOfStudentsPurchased = void 0;
const models_1 = require("../models");
const noOfStudentsPurchased = (instructorId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const courses = yield models_1.course.find({ instructorRef: instructorId }).select('_id');
        const courseIds = courses.map((course) => course._id);
        if (courseIds.length === 0) {
            return 0;
        }
        const enrollmentData = yield models_1.Enrollment.aggregate([
            { $match: { courseId: { $in: courseIds } } },
            { $group: { _id: '$userId' } },
            { $count: "totalStudents" }
        ]);
        const totalStudents = ((_a = enrollmentData[0]) === null || _a === void 0 ? void 0 : _a.totalStudents) || 0;
        return totalStudents;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.noOfStudentsPurchased = noOfStudentsPurchased;
