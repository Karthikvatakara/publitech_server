import { Router } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";
import { controllers } from "../../presentation/controllers";
import express from 'express';
import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";
import { verifyAdmin } from "../../_lib/common/middlewares/verifyAdmin";
  

export const paymentRoutes = (dependencies:IDepencencies) => {
    const { createCheckOutSession,stripeWebhook,paymentSuccess,
        createSubscriptionCheckout, getAllCoursePayments, getAllSubscriptionPayments } = controllers(dependencies);

    const router  = Router();

    router.route("/create-checkout-session")
        .post(createCheckOutSession);

    router.route("/create-subscription-checkout-session")
        .post(createSubscriptionCheckout)

    router.route("/webhook")
        .post(express.raw({ type: 'application/json' }), stripeWebhook);
        
    router.route("/success")
        .get(paymentSuccess)
    
    router.route("/admin/payments")
        .get(getAllCoursePayments)

    router.route("/admin/subscriptionPayments")
        .get(getAllSubscriptionPayments)
        
    return router  
}