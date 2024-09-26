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
exports.createExam = void 0;
const assessment_1 = require("../models/assessment");
const createExam = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = data;
        console.log("🚀 ~ createExam ~ courseId: in repository", courseId);
        const isExist = yield assessment_1.Assessment.findOne({ courseId });
        console.log("🚀 ~ createExam ~ isExist:", isExist);
        if (isExist) {
            throw new Error("exam already exist for this course");
        }
        const createdExam = yield assessment_1.Assessment.create(data);
        console.log("🚀 ~ createExam ~ createdExam:", createdExam);
        return createdExam;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.createExam = createExam;
