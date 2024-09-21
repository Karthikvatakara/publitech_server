import { NextFunction, Request, Response } from "express";
import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const totalCoursesOfInstructorController = ( dependencies: IDependencies ) => {
        const { useCases: { totalCoursesOfInstructorUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{

            const userId = req?.user?._id;
            console.log("🚀 ~ returnasync ~ userId:", userId)

            const totalCourses = await totalCoursesOfInstructorUseCase(dependencies).execute(userId!);

            if(!totalCourses) {
                throw ErrorResponse.notFound("no of totalcourses not found");
            }

            res.status(200).json({ success: true, data: totalCourses, message: " number of totalcourses fetched successfully"})
        }catch(error){
            next(error)
        }
    }
}