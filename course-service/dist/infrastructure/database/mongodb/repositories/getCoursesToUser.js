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
exports.getCoursesToUser = void 0;
const models_1 = require("../models");
const getCoursesToUser = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search, category, sort, page, limit } = params;
        let query = { isVerified: true, stage: "accepted", isBlocked: false };
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        if (category) {
            query.categoryRef = category;
        }
        let sortOption = {};
        if (sort === 'title_asc') {
            sortOption.title = 1;
        }
        else if (sort === 'title_desc') {
            sortOption.title = -1;
        }
        else if (sort === 'price_asc') {
            sortOption['pricing.amount'] = 1;
        }
        else if (sort === 'price_desc') {
            sortOption['pricing.amount'] = -1;
        }
        const totalCourses = yield models_1.course.countDocuments(query);
        const totalPages = Math.ceil(totalCourses / limit);
        const courseData = yield models_1.course.find(query).
            populate('categoryRef.title')
            .sort(sortOption)
            .skip((page - 1) * limit)
            .limit(limit);
        console.log("🚀 ~ courseData:", courseData);
        return { courses: courseData, totalPages, currentPage: page };
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getCoursesToUser = getCoursesToUser;
