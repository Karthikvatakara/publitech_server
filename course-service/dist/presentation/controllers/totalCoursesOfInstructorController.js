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
exports.totalCoursesOfInstructorController = void 0;
const ErrorResponse_1 = __importDefault(require("../../_lib/common/error/ErrorResponse"));
const totalCoursesOfInstructorController = (dependencies) => {
    const { useCases: { totalCoursesOfInstructorUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id;
            console.log("🚀 ~ returnasync ~ userId:", userId);
            const totalCourses = yield totalCoursesOfInstructorUseCase(dependencies).execute(userId);
            if (!totalCourses) {
                throw ErrorResponse_1.default.notFound("no of totalcourses not found");
            }
            res.status(200).json({ success: true, data: totalCourses, message: " number of totalcourses fetched successfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.totalCoursesOfInstructorController = totalCoursesOfInstructorController;
