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
exports.updateCourseRejectStatus = void 0;
const models_1 = require("../models");
const updateCourseRejectStatus = (courseId, status, rejectReason) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statusUpdate = yield models_1.course.findByIdAndUpdate(courseId, {
            stage: status === 'rejected' ? status : "accepted",
            isVerified: true,
            rejectReason: rejectReason
        }, { new: true });
        if (!statusUpdate) {
            throw new Error("status not updated succesfully");
        }
        return statusUpdate;
    }
    catch (error) {
        throw new Error((error === null || error === void 0 ? void 0 : error.message) || "error occured in updatecourserejectstaturs repo");
    }
});
exports.updateCourseRejectStatus = updateCourseRejectStatus;
