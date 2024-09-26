import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";

export const getAllSubscriptionPaymentController = ( dependencies: IDepencencies ) => {
            const { useCases: { getAllSubscriptionPaymentUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const page = parseInt( req.query.page as string ) || 1;
            const limit = parseInt( req.query.limit as string ) || 5;
            const status = req.query.status as string 
            const search = req.query.search as string
            
            console.log("🚀 ~ returnasync ~ page:", page)
            console.log("🚀 ~ returnasync ~ limit:", limit)
            console.log("🚀 ~ returnasync ~ status:", status)
            console.log("🚀 ~ returnasync ~ search:", search)
            
            const { subscriptions, totalPages, totalCount } = await getAllSubscriptionPaymentUseCase(dependencies).execute(page,limit,status,search);

            if( !subscriptions ) {
                throw new Error("subscription not found")
            }

            res.status(200).
            json({success: true,
                 data: subscriptions, 
                 totalPages,
                 totalCount,
                 message:"subscription payment fetched succesfully"})
        }catch(error) {
            next(error)
        }
    }
}