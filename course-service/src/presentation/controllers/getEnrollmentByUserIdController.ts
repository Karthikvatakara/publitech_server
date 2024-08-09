import { NextFunction, Request, Response } from "express";
import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const getEnrollmentByUserIdController = (dependencies:IDependencies) => {
    const { useCases:{ getEnrollmentByUserId }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            if(!req.user){
                throw ErrorResponse.unAuthorized("user is not logged in");
            }

            const enrolledCourses = await getEnrollmentByUserId(dependencies).execute(req.user._id);
            console.log("🚀 ~ returnasync ~ enrolledCourses:", enrolledCourses)

            res.status(200).json({success:true,data:enrolledCourses,message:"enrolled courses fetched succesfully"})
        }catch(error){
            next(error);
        }
    }
}