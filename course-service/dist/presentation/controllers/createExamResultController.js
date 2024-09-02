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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExamResultController = void 0;
const ErrorResponse_1 = __importDefault(require("../../_lib/common/error/ErrorResponse"));
const createExamResultController = (dependencies) => {
    const { useCases: { createExamResultUseCase, checkResultOfAssessmentAndUserIdUseCase, updateResultUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = req.body;
            console.log("🚀 ~ returnasync ~ data:", data);
            const { assessmentRef, userRef } = data;
            if (!assessmentRef || !userRef) {
                throw ErrorResponse_1.default.badRequest("data not given");
            }
            const existingResult = yield checkResultOfAssessmentAndUserIdUseCase(dependencies).execute(assessmentRef, userRef);
            if (existingResult) {
                console.log(existingResult === null || existingResult === void 0 ? void 0 : existingResult._id, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                const updatedResult = yield updateResultUseCase(dependencies).execute(existingResult === null || existingResult === void 0 ? void 0 : existingResult._id.toString(), data);
                console.log("🚀 ~ returnasync ~ updatedResult:", updatedResult);
                if (!updatedResult) {
                    throw ErrorResponse_1.default.notFound("data not updated");
                }
                res.status(200).json({ success: true, data: updatedResult, messge: "data updatedsuccessfully" });
            }
            else {
                const createResult = yield createExamResultUseCase(dependencies).execute(data);
                if (!createResult) {
                    throw ErrorResponse_1.default.internalError("result is not saved succesfully");
                }
                res.status(200).json({ success: true, data: createResult, message: "exam result saved succesfully" });
            }
        }
        catch (error) {
            next(error);
        }
    });
};
exports.createExamResultController = createExamResultController;
