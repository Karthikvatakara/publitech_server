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
exports.onGoingCoursesController = void 0;
const onGoingCoursesController = (dependencies) => {
    const { useCases: { noOfCompletedEnrollmentsUseCase, noOfStudentEnrolledCoursesUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id;
            const enrolledCourses = yield noOfStudentEnrolledCoursesUseCase(dependencies).execute(userId);
            const compltedCourses = yield noOfCompletedEnrollmentsUseCase(dependencies).execute(userId);
            const ongoingCourses = enrolledCourses - compltedCourses;
            res.status(200).json({ success: true, data: ongoingCourses, message: "ongoing courses fetched succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.onGoingCoursesController = onGoingCoursesController;