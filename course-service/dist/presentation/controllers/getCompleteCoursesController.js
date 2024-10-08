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
exports.getCompleteCoursesController = void 0;
const getCompleteCoursesController = (dependencies) => {
    const { useCases: { getCompleteCourses } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const search = req.query.search || "";
            const filter = req.query.filter || "";
            const sort = req.query.sort || "";
            const { courses, total } = yield getCompleteCourses(dependencies).execute(page, limit, search, filter, sort);
            res.status(200).json({ success: true, data: courses, total, page, limit, message: "all course details retrieved succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getCompleteCoursesController = getCompleteCoursesController;
