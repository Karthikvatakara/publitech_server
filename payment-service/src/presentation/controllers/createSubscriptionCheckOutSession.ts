import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const createSubscriptionCheckoutSessionController = (dependencies:IDepencencies) => {
    return async(req:Request,res:Response,next:NextFunction) => {
        try {
            // console.log(req.body);
            const { planName, subscriptionThumbnail, userId, chatId, amount } = req.body
            console.log("🚀 ~ returnasync ~ chatId:", chatId)
            console.log("🚀 ~ returnasync ~ userId:", userId)
            console.log("🚀 ~ returnasync ~ planName:", planName)

            const line_items = [{
                price_data: {
                    currency: 'INR',
                    product_data: {
                        name: planName,
                        images: [subscriptionThumbnail],
                    },
                    unit_amount: Math.floor(amount * 100)
                },
                quantity: 1 
            }]
            
           const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',

                success_url: `https://publitech-client.vercel.app/subscription?session_id={CHECKOUT_SESSION_ID}&amount=${amount}&currency=INR&chatId=${chatId}&userId=${userId}`,
                cancel_url: `https://publitech-client.vercel.app/subscription/failure`,
                metadata: {
                    chatId,
                    userId,
                    planName
                }
           })

           res.status(200).json({success: true, id: session.id, message: "Subscription checkout session created"})
        } catch(error) {
            next(error)
        }
    }
}