import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";

export const getTotalPaymentsController = ( dependencies: IDepencencies ) => {
    const { useCases:{ getTotalPaymentsUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const totalPayments = await getTotalPaymentsUseCase(dependencies).execute();

            if(!totalPayments){
                throw new Error("payments not found ")
            }

            res.status(200).json({ success: true, data: totalPayments, message: "total payments fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}