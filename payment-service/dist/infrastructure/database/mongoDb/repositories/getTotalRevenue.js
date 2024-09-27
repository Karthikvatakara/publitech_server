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
exports.getTotalRevenue = void 0;
const payment_1 = require("../models/payment");
const subscriptionPayment_1 = require("../models/subscriptionPayment");
const getTotalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentsRevenue = yield payment_1.Payment.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                    },
                    totalAmount: { $sum: "$amount" },
                },
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 },
            }
        ]);
        const subscriptionRevenue = yield subscriptionPayment_1.subscriptionPayment.aggregate([
            { $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                    },
                    totalAmount: { $sum: "$amount" },
                },
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 },
            }
        ]);
        const combinedRevenue = {};
        paymentsRevenue.forEach((item) => {
            const key = `${item._id.year}-${item._id.month}`;
            combinedRevenue[key] = item.totalAmount;
        });
        subscriptionRevenue.forEach((item) => {
            const key = `${item._id.year}-${item._id.month}`;
            combinedRevenue[key] = (combinedRevenue[key] || 0) + item.totalAmount;
        });
        const formattedData = Object.keys(combinedRevenue).map((key) => {
            const [year, month] = key.split("-");
            return {
                year: parseInt(year),
                month: parseInt(month),
                TotalRevenue: combinedRevenue[key]
            };
        });
        return formattedData;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getTotalRevenue = getTotalRevenue;
