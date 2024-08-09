"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../../presentation/controllers");
const express_2 = __importDefault(require("express"));
const paymentRoutes = (dependencies) => {
    const { createCheckOutSession, stripeWebhook, paymentSuccess, createSubscriptionCheckout } = (0, controllers_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route("/create-checkout-session")
        .post(createCheckOutSession);
    router.route("/create-subscription-checkout-session")
        .post(createSubscriptionCheckout);
    router.route("/webhook")
        .post(express_2.default.raw({ type: 'application/json' }), stripeWebhook);
    router.route("/success")
        .get(paymentSuccess);
    return router;
};
exports.paymentRoutes = paymentRoutes;
