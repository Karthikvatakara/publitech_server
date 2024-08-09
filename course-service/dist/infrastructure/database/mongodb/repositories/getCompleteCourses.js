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
exports.getCompleteCourses = void 0;
const models_1 = require("../models");
const getCompleteCourses = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (page = 1, limit = 5, search = "", filter = "", sort = "") {
    try {
        const skip = (page - 1) * limit;
        let query = { isBlockedInstructor: false };
        if (search) {
            query.$and = [
                { isBlockedInstructor: false },
                {
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { 'instructorRef.username': { $regex: search, $options: 'i' } },
                        { 'categoryRef.title': { $regex: search, $options: 'i' } }
                    ]
                }
            ];
        }
        if (filter) {
            if (filter === 'verified') {
                query.isVerified = true;
            }
            else if (filter === "notVerified") {
                query.isVerified = false;
            }
            else {
                query.stage = filter;
            }
        }
        let sortOption = {};
        if (sort === 'priceLowToHigh') {
            sortOption = { 'pricing.amount': 1 };
        }
        else if (sort === 'priceHighToLow') {
            sortOption = { 'pricing.amount': -1 };
        }
        const allCourses = yield models_1.course.find(query).
            populate("instructorRef", "username").
            populate("categoryRef", "title")
            .sort(sortOption)
            .skip(skip)
            .limit(limit);
        const total = yield models_1.course.countDocuments(query);
        return { courses: allCourses, total };
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getCompleteCourses = getCompleteCourses;
