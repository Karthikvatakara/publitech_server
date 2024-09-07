"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../../presentation/controllers");
const express_2 = __importDefault(require("express"));
const jwtMiddleware_1 = require("../../_lib/common/middlewares/jwtMiddleware");
const verifyAdmin_1 = require("../../_lib/common/middlewares/verifyAdmin");
const paymentRoutes = (dependencies) => {
    const { createCheckOutSession, stripeWebhook, paymentSuccess, createSubscriptionCheckout, getAllCoursePayments, getAllSubscriptionPayments, getUserCoursePayments } = (0, controllers_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route("/create-checkout-session")
        .post(jwtMiddleware_1.jwtMiddleware, createCheckOutSession);
    router.route("/create-subscription-checkout-session")
        .post(jwtMiddleware_1.jwtMiddleware, createSubscriptionCheckout);
    router.route("/webhook")
        .post(express_2.default.raw({ type: 'application/json' }), stripeWebhook);
    router.route("/success")
        .get(jwtMiddleware_1.jwtMiddleware, paymentSuccess);
    router.route("/admin/payments")
        .get(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, getAllCoursePayments);
    router.route("/admin/subscriptionPayments")
        .get(jwtMiddleware_1.jwtMiddleware, getAllSubscriptionPayments);
    router.route("/user/payments")
        .get(jwtMiddleware_1.jwtMiddleware, getUserCoursePayments);
    return router;
};
exports.paymentRoutes = paymentRoutes;
