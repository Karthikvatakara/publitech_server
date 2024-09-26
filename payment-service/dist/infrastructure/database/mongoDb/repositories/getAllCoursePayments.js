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
exports.getAllCoursePayments = void 0;
const payment_1 = require("../models/payment");
const User_1 = require("../models/User");
const getAllCoursePayments = (page, limit, status, search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (status && ["completed", "failed", "pending"].includes(status)) {
            query.status = status;
        }
        if (search) {
            // First, find user IDs that match the search term
            const userIds = yield User_1.User.find({
                username: { $regex: search, $options: "i" }
            }).distinct('_id');
            // Then, use these IDs in the main query
            query.$or = [
                { userId: { $in: userIds } },
                { instructorRef: { $in: userIds } }
            ];
        }
        const totalCount = yield payment_1.Payment.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);
        const getAllCoursePayments = yield payment_1.Payment.find(query)
            .populate({
            path: 'userId',
            model: 'users',
            select: 'username email -_id'
        })
            .populate({
            path: 'instructorRef',
            model: 'users',
            select: 'username email -_id'
        })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean();
        return { payments: getAllCoursePayments, totalPages, totalCount };
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getAllCoursePayments = getAllCoursePayments;
