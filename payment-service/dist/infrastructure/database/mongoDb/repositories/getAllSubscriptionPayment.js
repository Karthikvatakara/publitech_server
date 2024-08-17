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
exports.getAllSubscriptionPayment = void 0;
const subscriptionPayment_1 = require("../models/subscriptionPayment");
const User_1 = require("../models/User");
const getAllSubscriptionPayment = (page, limit, status, search) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀 ~ limit:", limit);
    console.log("🚀 ~ page:", page);
    try {
        let query = {};
        // Status filter
        if (status && ["completed", "pending", "failed"].includes(status)) {
            query.status = status;
        }
        // Search filter
        if (search) {
            const userIds = yield User_1.User.find({
                username: { $regex: search, $options: "i" }
            }).distinct('_id');
            query.$or = [
                { userId: { $in: userIds } },
                { instructorRef: { $in: userIds } }
            ];
        }
        // Calculate pagination
        const skip = (page - 1) * limit;
        console.log("🚀 ~ skip:", skip);
        // Get total count for pagination
        const totalCount = yield subscriptionPayment_1.subscriptionPayment.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);
        // Main aggregation pipeline
        const allSubscription = yield subscriptionPayment_1.subscriptionPayment.aggregate([
            { $match: query },
            {
                $lookup: {
                    from: "chats",
                    localField: "chatId",
                    foreignField: "_id",
                    as: "chatDetails"
                }
            },
            { $unwind: "$chatDetails" },
            {
                $lookup: {
                    from: "users",
                    localField: "chatDetails.users",
                    foreignField: "_id",
                    as: "participants"
                }
            },
            {
                $project: {
                    userId: 1,
                    chatId: 1,
                    method: 1,
                    status: 1,
                    amount: 1,
                    subscriptionType: 1,
                    chatDetails: {
                        isGroupChat: 1,
                        groupName: 1,
                        subscriptionType: 1
                    },
                    participants: {
                        _id: 1,
                        username: 1
                    }
                }
            },
            { $skip: skip },
            { $limit: limit }
        ]);
        return {
            subscriptions: allSubscription,
            totalPages: totalPages,
            totalCount: totalCount
        };
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getAllSubscriptionPayment = getAllSubscriptionPayment;
