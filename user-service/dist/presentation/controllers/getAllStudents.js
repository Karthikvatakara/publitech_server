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
exports.getAllStudentsController = void 0;
const getAllStudentsController = (dependecies) => {
    const { useCases: { getAllStudentsUseCase } } = dependecies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const status = req.query.status;
            const search = req.query.search;
            console.log("🚀 ~ returnasync ~ status:", status);
            console.log("🚀 ~ returnasync ~ search:", search);
            const { students, totalPages, totalCount } = yield getAllStudentsUseCase(dependecies).execute(page, limit, status, search);
            res.status(200).json({
                success: true,
                data: students,
                totalPages,
                totalCount,
                currentPage: page,
                message: " fetched instrucotrs succesfully"
            });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getAllStudentsController = getAllStudentsController;
