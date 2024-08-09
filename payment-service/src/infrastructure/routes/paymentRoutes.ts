import { Router } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";
import { controllers } from "../../presentation/controllers";
import express from 'express';

export const paymentRoutes = (dependencies:IDepencencies) => {
    const { createCheckOutSession,stripeWebhook,paymentSuccess,createSubscriptionCheckout } = controllers(dependencies);

    const router  = Router();

    router.route("/create-checkout-session")
        .post(createCheckOutSession);

    router.route("/create-subscription-checkout-session")
        .post(createSubscriptionCheckout)

    router.route("/webhook")
        .post(express.raw({ type: 'application/json' }), stripeWebhook);
        
    router.route("/success")
        .get(paymentSuccess)

        
    return router
}