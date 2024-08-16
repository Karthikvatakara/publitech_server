import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";

export const getAllSubscriptionPaymentController = ( dependencies: IDepencencies ) => {
            const { useCases: { getAllSubscriptionPaymentUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const getSubscriptionPayment = await getAllSubscriptionPaymentUseCase(dependencies).execute();

            if( !getSubscriptionPayment ) {
                throw new Error("subscription not found")
            }

            res.status(200).json({success: true, data: getSubscriptionPayment, message:"subscription payment fetched succesfully"})
            
        }catch(error) {
            next(error)
        }
    }
}