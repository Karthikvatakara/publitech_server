import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";
import { ObjectId } from "mongoose";

export const noOfStudentsPurchasedController = ( dependencies: IDependencies ) => {
    const { useCases: { noOfStudentsPurchasedUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{

            const instructorId = req?.user?._id;
 

            const noOfStudents = await noOfStudentsPurchasedUseCase(dependencies).execute(instructorId!);

        

            res.status(200).json({ success: true, data: noOfStudents, message: noOfStudents! >0 ? "no of students succesfully fetched" :"No students have purchased courses from this instructor"})
        }catch(error){
            next(error)
        }
    }
}