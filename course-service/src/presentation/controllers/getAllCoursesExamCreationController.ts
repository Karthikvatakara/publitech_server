import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const getAllCoursesExamCreationController = ( dependencies: IDependencies ) => {
    const { useCases: { getAllCoursesExamCreationUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const user = req.user;

            const allCourses = await getAllCoursesExamCreationUseCase(dependencies).execute(user?._id!)

            if( !allCourses ) {
                return ErrorResponse.notFound("courses not found")
            } 

            res.status(200).json({ success: true, data: allCourses, message: "courses retrieved succesfully"})
        }catch(error){
            next(error);
        }
    }
}