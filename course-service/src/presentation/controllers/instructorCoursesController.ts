import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import { course } from "../../infrastructure/database/mongodb/models";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const instructorCoursesController = ( dependencies: IDependencies ) => {
    const { useCases: { instructorCoursesUseCase }} = dependencies;

    return async(req: Request, res: Response, next: NextFunction ) => {
        try{
            const instructorId = req?.user?._id;

            const coursesOfInstructor = await instructorCoursesUseCase(dependencies).execute(instructorId!)

            if(!coursesOfInstructor) {
                throw ErrorResponse.notFound("courses of instructor not found");
            }

            res.status(200).json({ success: true, data: coursesOfInstructor, message:"instructor courses fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}