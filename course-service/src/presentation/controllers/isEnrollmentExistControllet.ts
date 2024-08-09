import { Request,Response,NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const isEnrollmenetExistController = (dependencies:IDependencies) => {
    const { useCases: { isEnrollmentExistUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const { courseId,userId } = req.body;
            console.log("🚀 ~ returnasync ~ userId:incontroller", userId)
            console.log("🚀 ~ returnasync ~ courseId:in controller", courseId)

            const enrollmentDetails = await isEnrollmentExistUseCase(dependencies).execute(courseId,userId)

            if(!enrollmentDetails){
                throw  ErrorResponse.notFound("enrollment details not found")
            }

            res.status(200).json({success:true,data:enrollmentDetails,message:"enrollment data fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}