"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const createCheckOutSessionController_1 = require("./createCheckOutSessionController");
const webHookHandler_1 = require("./webHookHandler");
const paymentSuccessCotroller_1 = require("./paymentSuccessCotroller");
const createSubscriptionCheckOutSession_1 = require("./createSubscriptionCheckOutSession");
const getAllCoursePaymentsController_1 = require("./getAllCoursePaymentsController");
const getAllSubscriptionPayment_1 = require("./getAllSubscriptionPayment");
const controllers = (dependencies) => {
    return {
        createCheckOutSession: (0, createCheckOutSessionController_1.createCheckOutSessionController)(dependencies),
        stripeWebhook: (0, webHookHandler_1.stripeWebhookHandler)(dependencies),
        paymentSuccess: (0, paymentSuccessCotroller_1.paymentSuccessController)(dependencies),
        createSubscriptionCheckout: (0, createSubscriptionCheckOutSession_1.createSubscriptionCheckoutSessionController)(dependencies),
        getAllCoursePayments: (0, getAllCoursePaymentsController_1.getAllCoursePaymentsController)(dependencies),
        getAllSubscriptionPayments: (0, getAllSubscriptionPayment_1.getAllSubscriptionPaymentController)(dependencies)
    };
};
exports.controllers = controllers;
