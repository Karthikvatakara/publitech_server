import { NextFunction, Request, Response } from "express";
import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const studentEnrolledCoursesController = ( dependencies: IDependencies ) => {
    const { useCases: { studentEnrolledCoursesUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) =>{
        try{
            const userId = req?.user?._id;
            console.log("🚀 ~ returnasync ~ userId:99999999999999", userId)

            const enrolledCourses = await studentEnrolledCoursesUseCase(dependencies).execute(userId!);

            if(!enrolledCourses){
                throw ErrorResponse.notFound("no courses found");
            }

            res.status(200).json({ success: true, data: enrolledCourses, message: "enrolled courses fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}