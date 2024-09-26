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
exports.updateCourse = void 0;
const models_1 = require("../models");
const mongoose_1 = require("mongoose");
const updateCourse = (courseId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = new mongoose_1.Types.ObjectId(courseId);
        const updated = yield models_1.course.findByIdAndUpdate(id, data, { new: true });
        console.log("🚀 ~ updateCourse ~ updated:", updated);
        if (!updated) {
            throw new Error("data is not updated succesfully");
        }
        return updated;
    }
    catch (error) {
        throw new Error((error === null || error === void 0 ? void 0 : error.message) || "error occurd in updaetcourse repo");
    }
});
exports.updateCourse = updateCourse;
