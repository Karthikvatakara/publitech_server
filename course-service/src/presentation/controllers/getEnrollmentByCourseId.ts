import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const getEnrollmentByCourseIdController = ( dependencies: IDependencies) => {
    const { useCases: { getEnrollmentByCourseIdUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction) => {
        try{
            const { courseId, userId } = req.params;

            const enrollment = await getEnrollmentByCourseIdUseCase(dependencies).execute(courseId,userId);

            if( !enrollment ) {
                throw  ErrorResponse.notFound("the enrollment not found")
            }

            res.status(200).json({ success: true, data: enrollment, message: "enrollmmet succesfully fetched"})
        }catch(error){
            next(error)
        }
    }
}