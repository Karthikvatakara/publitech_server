import { NextFunction, Request, Response } from "express";
import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const categoryEnrollmentDistributionController = ( dependencies: IDependencies ) => {
    const { useCases: { categoryEnrollmentDistributionUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const categoryEnrollment = await categoryEnrollmentDistributionUseCase(dependencies).execute();

            if(!categoryEnrollment){
                throw ErrorResponse.notFound("enrollment distribution not found");
            };

            res.status(200).json({ success: true, data: categoryEnrollment, message: "enrollment fetched successfully"})
        }catch(error){
            next(error)
        }
    }
}