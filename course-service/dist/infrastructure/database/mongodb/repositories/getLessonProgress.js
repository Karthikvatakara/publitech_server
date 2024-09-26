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
exports.getLessonProgress = void 0;
const models_1 = require("../models");
const getLessonProgress = (userId, courseId, lessonId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log("🚀 ~ getLessonProgress ~ courseId:", courseId);
    console.log("🚀 ~ getLessonProgress ~ lessonId:", lessonId);
    console.log("🚀 ~ getLessonProgress ~ userId:", userId);
    try {
        const enrollment = yield models_1.Enrollment.findOne({ userId, courseId });
        if (!enrollment) {
            // throw new Error("no enrollment found")
            return null;
        }
        const lessonProgess = (_b = (_a = enrollment.progress) === null || _a === void 0 ? void 0 : _a.lessonProgress) === null || _b === void 0 ? void 0 : _b.find((lp) => lp.lessonId.toString() === lessonId);
        return lessonProgess || null;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getLessonProgress = getLessonProgress;
