import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import ErrorResponse from "../../_lib/error/ErrorResponse";

export const findInstructorByIdController = ( dependencies: IDependencies ) => {
    const { useCases: { findInstructorByIdUseCase }} = dependencies;

    return async(req: Request, res: Response, next: NextFunction ) => {
        try{   
            const { instructorId } = req.body;
            console.log("🚀 ~ returnasync ~ instructorId:", instructorId)
            const instructor = await findInstructorByIdUseCase(dependencies).execute(instructorId)

            if(!instructor ){
                throw ErrorResponse.notFound("instructor not found")
            };

            res.status(200).json({ success: true, data: instructor, message:" instructor fetched succesfully"})
        }catch(error){
            next(error);
        }
    }
}