import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/errorResponse";

export const getTotalPaymentsForInstructorController = ( dependencies: IDepencencies ) => {
    const { useCases: { getTotalPaymentsForInstructorUseCase }} = dependencies;

    return async(req: Request, res: Response, next: NextFunction) => {
        try{
            const instructorId = req?.user?._id;

            const getTotalPayments = await getTotalPaymentsForInstructorUseCase(dependencies).execute(instructorId!);

            // if(!getTotalPayments) {
            //     throw ErrorResponse.notFound("instructor Payment not found")
            // };
            return res.status(200).json({ success: true, data: getTotalPayments, message: "payment fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}