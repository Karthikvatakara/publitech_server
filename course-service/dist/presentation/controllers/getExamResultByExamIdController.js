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
exports.getExamResultByExamIdController = void 0;
const getExamResultByExamIdController = (dependencies) => {
    const { useCases: { getExamResultByExamIdUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { assessmentRef, userId } = req.params;
            console.log("🚀 ~ returnasync ~ assessmentRef:", assessmentRef);
            const examresult = yield getExamResultByExamIdUseCase(dependencies).execute(assessmentRef, userId);
            if (!examresult) {
                throw new Error("result not found");
            }
            res.status(200).json({ success: true, data: examresult, message: "exam result fetched succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getExamResultByExamIdController = getExamResultByExamIdController;
