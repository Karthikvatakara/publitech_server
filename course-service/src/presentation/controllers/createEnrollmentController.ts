import { Request,Response,NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const createEnrollmentController = (dependencies:IDependencies) => {
    const { useCases: { createEnrollmentUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{        
            console.log("reached in controller")
            const createdEnrollment = await createEnrollmentUseCase(dependencies).execute(req.body)

            if(!createdEnrollment) {
                throw ErrorResponse.internalError("enrollment is not succesull")
            }

            res.status(200).json({ success:true,data:createdEnrollment,message:"enrollment created succesfully" })
        }catch(error){
            next(error)
        }
    }
}