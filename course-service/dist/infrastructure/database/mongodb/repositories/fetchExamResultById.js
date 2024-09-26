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
exports.fetchExamResultById = void 0;
const result_1 = require("../models/result");
const fetchExamResultById = (resultId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀 ~ fetchExamResultById ~ resultId:", resultId);
    try {
        const existingResult = yield result_1.Result.findById(resultId)
            .populate({
            path: 'userRef',
            select: 'username email profile contact',
        })
            .populate({
            path: 'assessmentRef',
            select: 'courseId',
        });
        return existingResult;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.fetchExamResultById = fetchExamResultById;
