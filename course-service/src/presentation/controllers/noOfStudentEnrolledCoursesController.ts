import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const noOfStudentEnrolledCoursesController = ( dependencies: IDependencies ) => {
    const { useCases: { noOfStudentEnrolledCoursesUseCase }} = dependencies;

    return async(req: Request, res: Response, next: NextFunction ) => {
        try{
            const userId = req?.user?._id;

            const noOfCourses = await noOfStudentEnrolledCoursesUseCase(dependencies).execute(userId!);

            if(!noOfCourses) {
                throw  ErrorResponse.notFound("no of courses no found");
            }

            res.status(200).json({ success: true, data: noOfCourses, message: " no of courses fetched succsfully"})
            
        }catch(error){
            next(error);
        }
    }
}