import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const topEnrollmentsController = ( dependencies: IDependencies ) => {
    const { useCases: { topEnrollmentsUseCase }} = dependencies;

    return async(req: Request, res: Response, next: NextFunction ) => {
        try{
            const topEnrollments = await topEnrollmentsUseCase(dependencies).execute();

            if(!topEnrollments) {
                throw ErrorResponse.notFound("no top enrollments found")
            };

            res.status(200).json({ success: true, data: topEnrollments, message: "enrollments fetched succesfully"})
        }catch(error){
            next(error);
        }
    }
}