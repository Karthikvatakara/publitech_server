import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const createCheckOutSessionController = (dependencies:IDepencencies) => {
    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            console.log(req.body);
            
            const { courseId,userId,amount,thumbnail,courseName,instructorRef } = req.body;
            
            const line_items = [{
                price_data: {
                    currency:'INR',
                    product_data: {
                        name: courseName,
                        images: [thumbnail],
                    },
                    unit_amount: Math.floor( amount*100 )
                },
                quantity:1 
            }]
            
           const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `https://publitech-client.vercel.app/courses/paymentSuccess?session_id={CHECKOUT_SESSION_ID}&amount=${amount}&currency=INR&courseId=${courseId}&userId=${userId}`,
            cancel_url: `https://publitech-client.vercel.app/courses/paymentFailure`,
            metadata: {
                courseId,
                userId,
                instructorRef
            }
           })

           res.status(200).json({success:true,id:session.id,message:"message from payment side"})
        }catch(error){
            next(error);
        }
    }   
}