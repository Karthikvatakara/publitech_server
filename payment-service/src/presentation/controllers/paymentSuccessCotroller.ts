import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const paymentSuccessController = (dependencies:IDepencencies) => {
    return async(req:Request,res:Response,next:NextFunction) => {
        
        const { session_id } = req.query;
        
        try{
            const session = await stripe.checkout.sessions.retrieve(session_id as string)
            res.status(200).json({success:true,data:session,message:"payment completed succesfully"})

        }catch(error){
            next(error);
        }
    }
}