import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const instructorEnrollmentController = ( dependencies: IDependencies ) => {
    const { useCases: { instructorEnrollmentsUseCase }} = dependencies;

    return async(req: Request, res: Response, next: NextFunction ) => {
        try{
            const instructorId = req?.user?._id;
            const instructorEnrollments = await instructorEnrollmentsUseCase(dependencies).execute(instructorId!);

            if(!instructorEnrollments){
                throw ErrorResponse.notFound("the enrollments not found")
            }

            res.status(200).json({ success: true, data: instructorEnrollments, message: "enrollments fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}