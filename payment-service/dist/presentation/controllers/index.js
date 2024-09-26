"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const createCheckOutSessionController_1 = require("./createCheckOutSessionController");
const webHookHandler_1 = require("./webHookHandler");
const paymentSuccessCotroller_1 = require("./paymentSuccessCotroller");
const createSubscriptionCheckOutSession_1 = require("./createSubscriptionCheckOutSession");
const getAllCoursePaymentsController_1 = require("./getAllCoursePaymentsController");
const getAllSubscriptionPayment_1 = require("./getAllSubscriptionPayment");
const getUserCoursePaymentsController_1 = require("./getUserCoursePaymentsController");
const getTotalPaymentsController_1 = require("./getTotalPaymentsController");
const getTotalRevenueController_1 = require("./getTotalRevenueController");
const getTotalPaymentsForInstructorController_1 = require("./getTotalPaymentsForInstructorController");
const controllers = (dependencies) => {
    return {
        createCheckOutSession: (0, createCheckOutSessionController_1.createCheckOutSessionController)(dependencies),
        stripeWebhook: (0, webHookHandler_1.stripeWebhookHandler)(dependencies),
        paymentSuccess: (0, paymentSuccessCotroller_1.paymentSuccessController)(dependencies),
        createSubscriptionCheckout: (0, createSubscriptionCheckOutSession_1.createSubscriptionCheckoutSessionController)(dependencies),
        getAllCoursePayments: (0, getAllCoursePaymentsController_1.getAllCoursePaymentsController)(dependencies),
        getAllSubscriptionPayments: (0, getAllSubscriptionPayment_1.getAllSubscriptionPaymentController)(dependencies),
        getUserCoursePayments: (0, getUserCoursePaymentsController_1.getUserCoursePaymentsController)(dependencies),
        getTotalPayments: (0, getTotalPaymentsController_1.getTotalPaymentsController)(dependencies),
        getTotalRevenue: (0, getTotalRevenueController_1.getTotalRevenueController)(dependencies),
        getTotalPaymentsForInstructor: (0, getTotalPaymentsForInstructorController_1.getTotalPaymentsForInstructorController)(dependencies)
    };
};
exports.controllers = controllers;
