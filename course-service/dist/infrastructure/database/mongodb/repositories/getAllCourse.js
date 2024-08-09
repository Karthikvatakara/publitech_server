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
exports.getAllCourse = void 0;
const models_1 = require("../models");
const mongoose_1 = require("mongoose");
const getAllCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(id);
        const courseData = yield models_1.course.find({ instructorRef: new mongoose_1.Types.ObjectId(id) });
        // console.log("🚀 ~ getAllCourse ~ courseData:", courseData,"in repository")
        return courseData;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getAllCourse = getAllCourse;
