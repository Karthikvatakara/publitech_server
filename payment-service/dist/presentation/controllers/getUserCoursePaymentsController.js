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
exports.getUserCoursePaymentsController = void 0;
const getUserCoursePaymentsController = (dependencies) => {
    const { useCases: { getUserCoursePaymentsUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id;
            console.log("🚀 ~ returnasync ~ userId:", userId);
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const status = req.query.status;
            const search = req.query.search;
            console.log("🚀 ~ returnasync ~ search:", search);
            const { payments, totalPages, totalCount, } = yield getUserCoursePaymentsUseCase(dependencies).execute(page, limit, status, search, userId);
            if (!payments) {
                res.status(400).json({ success: false, message: "data no fetched succesfully" });
            }
            res.status(200).json({
                succss: true,
                data: payments,
                totalPages,
                totalCount,
                message: "data fetched succesfully"
            });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getUserCoursePaymentsController = getUserCoursePaymentsController;
