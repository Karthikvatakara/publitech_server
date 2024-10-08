import { Router } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";
import { controllers } from "../../presentation/controllers";
import express from 'express';
import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";
import { verifyAdmin } from "../../_lib/common/middlewares/verifyAdmin";
import { verifyInstructor } from "../../_lib/common/middlewares/verifyInstructor";


export const paymentRoutes = (dependencies:IDepencencies) => {
    const { createCheckOutSession,stripeWebhook,paymentSuccess,
        createSubscriptionCheckout, getAllCoursePayments, getAllSubscriptionPayments, 
        getUserCoursePayments, getTotalPayments, getTotalRevenue, getTotalPaymentsForInstructor } = controllers(dependencies);

    const router  = Router();

    router.route("/create-checkout-session")
        .post(jwtMiddleware,createCheckOutSession);

    router.route("/create-subscription-checkout-session")
        .post(jwtMiddleware,createSubscriptionCheckout)

    router.route("/webhook")
        .post(express.raw({ type: 'application/json' }), stripeWebhook);
        
    router.route("/success")
        .get(jwtMiddleware,paymentSuccess)
    
    router.route("/admin/payments")
        .get(jwtMiddleware,verifyAdmin,getAllCoursePayments)

    router.route("/admin/subscriptionPayments")
        .get(jwtMiddleware,getAllSubscriptionPayments)
        
    router.route("/user/payments")
        .get(jwtMiddleware,getUserCoursePayments)

    router.route("/admin/totalPayments")
        .get(jwtMiddleware,verifyAdmin,getTotalPayments)

    router.route("/admin/totalrevenue")
        .get(jwtMiddleware,verifyAdmin,getTotalRevenue)

    router.route("/instructor/totalPayment")
        .get(jwtMiddleware,verifyInstructor,getTotalPaymentsForInstructor)

    return router  
}