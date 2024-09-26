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
exports.noOfCompletedEnrollmentsController = void 0;
const ErrorResponse_1 = __importDefault(require("../../_lib/common/error/ErrorResponse"));
const noOfCompletedEnrollmentsController = (dependencies) => {
    const { useCases: { noOfCompletedEnrollmentsUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id;
            const completedCourses = yield noOfCompletedEnrollmentsUseCase(dependencies).execute(userId);
            if (!completedCourses) {
                throw ErrorResponse_1.default.notFound("no courses completed");
            }
            res.status(200).json({ success: true, data: completedCourses, message: " no of completed courses fetched succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.noOfCompletedEnrollmentsController = noOfCompletedEnrollmentsController;
