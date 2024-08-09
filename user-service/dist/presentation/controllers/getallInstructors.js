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
exports.getallInstructorsController = void 0;
const getallInstructorsController = (dependecies) => {
    const { useCases: { getallInstructorsUseCase } } = dependecies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const status = req.query.status;
            const search = req.query.search;
            const { instructors, totalPages, totalCount } = yield getallInstructorsUseCase(dependecies).execute(page, limit, status, search);
            if (instructors.length === 0) {
                return res.status(404).json({ success: false, message: "no instructors found" });
            }
            res.status(200).json({
                success: true,
                data: instructors,
                totalPages,
                totalCount,
                currentPage: page,
                message: "active instrucors"
            });
        }
        catch (error) {
            console.error(error, "error inn the controller");
            next(error);
        }
    });
};
exports.getallInstructorsController = getallInstructorsController;
