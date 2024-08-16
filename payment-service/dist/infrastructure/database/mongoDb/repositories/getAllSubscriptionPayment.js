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
const getAllSubscriptionPayment = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSubscription = yield subscriptionPayment_1.subscriptionPayment.aggregate([
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
            }
        ]);
        return allSubscription;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getAllSubscriptionPayment = getAllSubscriptionPayment;
