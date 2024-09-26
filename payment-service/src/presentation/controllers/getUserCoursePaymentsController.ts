import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";

export const getUserCoursePaymentsController = ( dependencies: IDepencencies ) => {
    const { useCases:{ getUserCoursePaymentsUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction) => {
        try{
           const userId = req?.user?._id!
            console.log("🚀 ~ returnasync ~ userId:", userId)
            const page = parseInt( req.query.page as string ) || 1;
            const limit = parseInt( req.query.limit as string ) || 5;
            const status = req.query.status as string 
            const search = req.query.search as string
            console.log("🚀 ~ returnasync ~ search:", search)
            const { payments, totalPages, totalCount, } = await getUserCoursePaymentsUseCase(dependencies).execute( page, limit, status, search, userId);

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