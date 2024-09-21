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
exports.getTotalPaymentsForInstructor = void 0;
const chat_1 = require("../models/chat");
const payment_1 = require("../models/payment");
const subscriptionPayment_1 = require("../models/subscriptionPayment");
const getTotalPaymentsForInstructor = (instructorId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const totalPaymentsOfCourses = yield payment_1.Payment.aggregate([
            { $match: { instructorRef: instructorId, status: "completed" } },
            { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
        ]);
        const coursePayment = ((_a = totalPaymentsOfCourses[0]) === null || _a === void 0 ? void 0 : _a.totalAmount) || 0;
        const chatWithInstructor = yield chat_1.chat.find({ users: instructorId }).select("_id");
        const chatIds = chatWithInstructor.map((chat) => chat._id);
        if (chatIds.length === 0) {
            return coursePayment;
        }
        const subscriptionAmount = yield subscriptionPayment_1.subscriptionPayment.aggregate([
            { $match: { chatId: { $in: chatIds }, status: 'completed' } },
            { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
        ]);
        const totalSubscriptionAmount = ((_b = subscriptionAmount[0]) === null || _b === void 0 ? void 0 : _b.totalAmount) || 0;
        const totalAmount = coursePayment + totalSubscriptionAmount;
        return totalAmount;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getTotalPaymentsForInstructor = getTotalPaymentsForInstructor;
