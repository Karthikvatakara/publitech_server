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
exports.examsOfInstructor = void 0;
const assessment_1 = require("../models/assessment");
const examsOfInstructor = (instructorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exams = yield assessment_1.Assessment.find({ instructorId })
            .populate({
            path: "courseId",
            select: 'title',
            model: "courses"
        })
            .sort({ createdAt: -1 });
        return exams;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.examsOfInstructor = examsOfInstructor;
