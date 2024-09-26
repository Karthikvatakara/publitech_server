import { NextFunction, Response, Request } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";

export const onGoingCoursesController = ( dependencies: IDependencies ) =>{
    const { useCases : { noOfCompletedEnrollmentsUseCase, noOfStudentEnrolledCoursesUseCase}} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const userId = req?.user?._id;

            const enrolledCourses = await noOfStudentEnrolledCoursesUseCase(dependencies).execute(userId!);

            const compltedCourses = await noOfCompletedEnrollmentsUseCase(dependencies).execute(userId!);

            const ongoingCourses = enrolledCourses!-compltedCourses!

            res.status(200).json({ success: true, data: ongoingCourses, message: "ongoing courses fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}