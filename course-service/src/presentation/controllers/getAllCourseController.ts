import { NextFunction,Request,Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const getAllCourseController = (dependencies:IDependencies) => {
    const { useCases: { getCourseUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{

            if(!req.user) {
                throw new Error("Authentication required. no user provided")
            }            
            const getAllCourse = await getCourseUseCase(dependencies).execute(req.user._id);

            if(!getAllCourse){
                throw ErrorResponse.notFound("courses not found")
            }

            res.status(200).json({success:true,data:getAllCourse,message:"courses retrieved"})
        }catch(error){
            next(error);
        }
    }
}