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
exports.getAllCourseOfInstructor = void 0;
const models_1 = require("../models");
const getAllCourseOfInstructor = (id, page, limit, search, stage) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = { instructorRef: id };
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        if (stage) {
            query.stage = stage;
        }
        const totalCourses = yield models_1.course.countDocuments(query);
        const totalPages = Math.ceil(totalCourses / limit);
        const courseData = yield models_1.course.find(query)
            .skip((page - 1) * limit)
            .limit(limit);
        return { courses: courseData, totalPages, currentPage: page };
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getAllCourseOfInstructor = getAllCourseOfInstructor;
