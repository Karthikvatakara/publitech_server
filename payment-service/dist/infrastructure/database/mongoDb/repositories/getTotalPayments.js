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
exports.getTotalPayments = void 0;
const payment_1 = require("../models/payment");
const subscriptionPayment_1 = require("../models/subscriptionPayment");
const getTotalPayments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentResult = yield payment_1.Payment.aggregate([
            { $match: { status: 'completed' } },
            { $group: { _id: null, totalAmount: { $sum: '$amount' } } }
        ]);
        const subscriptionPaymentResult = yield subscriptionPayment_1.subscriptionPayment.aggregate([
            { $match: { status: 'completed' } },
            { $group: { _id: null, totalAmount: { $sum: '$amount' } } }
        ]);
        const paymentSum = paymentResult.length > 0 ? paymentResult[0].totalAmount : 0;
        const subscritpionSum = subscriptionPaymentResult.length > 0 ? subscriptionPaymentResult[0].totalAmount : 0;
        const totalSum = paymentSum + subscritpionSum;
        return totalSum;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getTotalPayments = getTotalPayments;
