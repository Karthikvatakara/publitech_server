import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/errorResponse";

export const getTotalRevenueController = ( dependencies: IDepencencies ) => {
    const { useCases: { getTotalRevenueUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction) => {
        try{
            const totalRevenue = await getTotalRevenueUseCase(dependencies).execute();

            if(!totalRevenue) {
                throw  ErrorResponse.notFound("total revenue not found")
            }

            res.status(200).json({ success: true, data: totalRevenue, message: "totalrevenue fetched succesfully"})
        }catch(error){
            next(error);
        }
    }
}