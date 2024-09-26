import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const noOfCompletedEnrollmentsController = ( dependencies: IDependencies ) => {
    const { useCases: { noOfCompletedEnrollmentsUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{

            const userId = req?.user?._id;

            const completedCourses = await noOfCompletedEnrollmentsUseCase(dependencies).execute(userId!);

            if(!completedCourses) {
                throw ErrorResponse.notFound("no courses completed")
            }

            res.status(200).json({ success: true, data: completedCourses, message: " no of completed courses fetched succesfully"})
        }catch(error){
            next(error);
        }
    }
}