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
exports.getAllSubscriptionPaymentController = void 0;
const getAllSubscriptionPaymentController = (dependencies) => {
    const { useCases: { getAllSubscriptionPaymentUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const status = req.query.status;
            const search = req.query.search;
            console.log("🚀 ~ returnasync ~ page:", page);
            console.log("🚀 ~ returnasync ~ limit:", limit);
            console.log("🚀 ~ returnasync ~ status:", status);
            console.log("🚀 ~ returnasync ~ search:", search);
            const { subscriptions, totalPages, totalCount } = yield getAllSubscriptionPaymentUseCase(dependencies).execute(page, limit, status, search);
            if (!subscriptions) {
                throw new Error("subscription not found");
            }
            res.status(200).
                json({ success: true,
                data: subscriptions,
                totalPages,
                totalCount,
                message: "subscription payment fetched succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getAllSubscriptionPaymentController = getAllSubscriptionPaymentController;
