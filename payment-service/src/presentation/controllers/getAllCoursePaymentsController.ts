import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";

export const getAllCoursePaymentsController = ( dependencies: IDepencencies ) => {
    const { useCases:{ getAllCoursePaymentUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction) => {
        try{

            const page = parseInt( req.query.page as string ) || 1;
            const limit = parseInt( req.query.limit as string ) || 5;
            const status = req.query.status as string 
            const search = req.query.search as string
            console.log("🚀 ~ returnasync ~ search:", search)
            const { payments, totalPages, totalCount } = await getAllCoursePaymentUseCase(dependencies).execute( page, limit, status, search);

            if( !payments ){
                res.status(400).json({ success: false, message:"data no fetched succesfully"})
            }

            res.status(200).json({
                succss: true,  
                data: payments,
                totalPages,
                totalCount, 
                message:"data fetched succesfully"
            })
            
        }catch(error){
            next(error);
        }
    }
} 