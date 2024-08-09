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
exports.getAllCourseOfInstructorController = void 0;
const ErrorResponse_1 = __importDefault(require("../../_lib/common/error/ErrorResponse"));
const getAllCourseOfInstructorController = (dependencies) => {
    const { useCases: { getAllCourseOfInsructorUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!req.user) {
                throw ErrorResponse_1.default.unAuthorized("instructor is not logged");
            }
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 6;
            const search = req.query.search || '';
            const stage = req.query.stage || '';
            const getAllCourse = yield getAllCourseOfInsructorUseCase(dependencies).execute(req.user._id, page, limit, search, stage);
            if (!getAllCourse) {
                throw ErrorResponse_1.default.notFound("courses not found");
            }
            res.status(200).json({
                success: true,
                data: getAllCourse.courses,
                totalPages: getAllCourse.totalPages,
                currentPage: getAllCourse.currentPage,
                message: "courses retrieved succesfully"
            });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getAllCourseOfInstructorController = getAllCourseOfInstructorController;
