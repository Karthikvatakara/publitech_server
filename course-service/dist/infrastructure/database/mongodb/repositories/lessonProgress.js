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
exports.lessonProgress = void 0;
const models_1 = require("../models");
const lessonProgress = (userId, courseId, lessonId, timeWatched, totalDuration) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const enrollment = yield models_1.Enrollment.findOne({ userId, courseId });
        if (!enrollment) {
            throw new Error("enrollment is not found");
        }
        const lessonProgress = (_b = (_a = enrollment.progress) === null || _a === void 0 ? void 0 : _a.lessonProgress) === null || _b === void 0 ? void 0 : _b.find((lp) => lp.lessonId.toString() === lessonId);
        if (lessonProgress) {
            lessonProgress.totalTimeWatched = timeWatched;
            lessonProgress.lastWatchedPosition = timeWatched;
            if (!lessonProgress.isCompleted) {
                lessonProgress.isCompleted = (timeWatched / totalDuration) >= .8;
            }
            // lessonProgress.isCompleted = (timeWatched / totalDuration) >= 0.8 ? true: false;
        }
        else {
            (_d = (_c = enrollment === null || enrollment === void 0 ? void 0 : enrollment.progress) === null || _c === void 0 ? void 0 : _c.lessonProgress) === null || _d === void 0 ? void 0 : _d.push({
                lessonId,
                totalTimeWatched: timeWatched,
                lastWatchedPosition: timeWatched,
                isCompleted: (timeWatched / totalDuration) >= 0.8
            });
        }
        yield enrollment.save();
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.lessonProgress = lessonProgress;
