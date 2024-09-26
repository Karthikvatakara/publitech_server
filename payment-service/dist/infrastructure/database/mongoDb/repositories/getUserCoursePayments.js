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
exports.getUserCoursePayments = void 0;
const course_1 = require("../models/course");
const payment_1 = require("../models/payment");
const User_1 = require("../models/User");
const getUserCoursePayments = (page, limit, status, search, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        query.userId = userId;
        console.log("🚀 ~ getUserCoursePayments ~ userId:", userId);
        if (status && ["completed", "pending", "failed"].includes(status)) {
            query.status = status;
        }
        if (search) {
            const courseIds = yield course_1.course.find({
                title: { $regex: search, $options: "i" }
            }).distinct('_id');
            const instructorIds = yield User_1.User.find({
                username: { $regex: search, $options: "i" }
            }).distinct('_id');
            query.$or = [
                { courseId: { $in: courseIds } },
                { instructorRef: { $in: instructorIds } }
            ];
        }
        const totalCount = yield payment_1.Payment.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);
        const getAllCoursePayments = yield payment_1.Payment.find(query)
            .populate({
            path: 'courseId',
            model: 'courses',
            select: 'title description'
        })
            .populate({
            path: 'instructorRef',
            model: 'users',
            select: 'username email'
        })
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 })
            .lean();
        console.log("🚀 ~ getUserCoursePayments ~ getAllCoursePayments:", getAllCoursePayments);
        return { payments: getAllCoursePayments, totalPages, totalCount };
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getUserCoursePayments = getUserCoursePayments;
