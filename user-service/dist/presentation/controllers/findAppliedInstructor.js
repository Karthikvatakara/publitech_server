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
exports.findAppliedInstructorController = void 0;
const findAppliedInstructorController = (dependencies) => {
    const { useCases: { findAppliedInstructrosUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const status = req.query.status || "all";
            const search = req.query.search || "";
            const result = yield findAppliedInstructrosUseCase(dependencies).execute(page, limit, status, search);
            if (((_a = result === null || result === void 0 ? void 0 : result.instructors) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                return res.status(200).json({ success: true, data: [], messages: "no instructors found" });
            }
            res.status(200).json({
                success: true,
                data: result === null || result === void 0 ? void 0 : result.instructors,
                totalCount: result === null || result === void 0 ? void 0 : result.totalCount,
                totalPages: result === null || result === void 0 ? void 0 : result.totalPages,
                currentPage: result === null || result === void 0 ? void 0 : result.currentPage,
                message: "applied instuctors"
            });
        }
        catch (error) {
            console.error(error, "error occured in the findAppliedInstructor");
            next(error);
        }
    });
};
exports.findAppliedInstructorController = findAppliedInstructorController;
