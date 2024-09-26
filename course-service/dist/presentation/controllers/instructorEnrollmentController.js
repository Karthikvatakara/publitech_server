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
exports.instructorEnrollmentController = void 0;
const ErrorResponse_1 = __importDefault(require("../../_lib/common/error/ErrorResponse"));
const instructorEnrollmentController = (dependencies) => {
    const { useCases: { instructorEnrollmentsUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const instructorId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id;
            const instructorEnrollments = yield instructorEnrollmentsUseCase(dependencies).execute(instructorId);
            if (!instructorEnrollments) {
                throw ErrorResponse_1.default.notFound("the enrollments not found");
            }
            res.status(200).json({ success: true, data: instructorEnrollments, message: "enrollments fetched succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.instructorEnrollmentController = instructorEnrollmentController;
