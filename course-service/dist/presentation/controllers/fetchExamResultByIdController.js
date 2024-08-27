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
exports.fetchExamResultByIdController = void 0;
const ErrorResponse_1 = __importDefault(require("../../_lib/common/error/ErrorResponse"));
const fetchExamResultByIdController = (dependencies) => {
    const { useCases: { fetchExamResultByIdUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("inn the fetchexam byid controller");
            const { resultId } = req.params;
            console.log("🚀 ~ returnasync ~ resultId:", resultId);
            const fetchResult = yield fetchExamResultByIdUseCase(dependencies).execute(resultId);
            if (!fetchResult) {
                throw ErrorResponse_1.default.notFound("ruslt is not found");
            }
            res.status(200).json({ success: true, data: fetchResult, message: "result data fetched succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.fetchExamResultByIdController = fetchExamResultByIdController;
