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
exports.isExamExistController = void 0;
const ErrorResponse_1 = __importDefault(require("../../_lib/common/error/ErrorResponse"));
const isExamExistController = (dependencies) => {
    const { useCases: { isExamExistUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { courseId } = req.params;
            console.log("🚀 ~ returnasync ~ courseId:", courseId);
            const isExist = yield isExamExistUseCase(dependencies).execute(courseId);
            if (!isExist) {
                throw ErrorResponse_1.default.notFound("the exam is not exist");
            }
            res.status(200).json({ succes: true, data: isExist, message: "exam isExist fetched succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.isExamExistController = isExamExistController;
