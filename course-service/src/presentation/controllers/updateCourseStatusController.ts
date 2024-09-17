import { NextFunction,Request,Response } from "express";
import { dependencies } from "../../_boot/dependencies"
import { IDependencies } from "../../application/interfaces/IDependency"
import courseStatusProducer from "../../infrastructure/kafka/producers/courseStatusProducer";

export const updateCourseStatusController = (dependencies:IDependencies) => {
    const {useCases: { updateCourseStatusUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            console.log("aaaaaaaaaaaaaaaaaaa5555555555556666666666666");
            
            const { courseId } = req.params;
            const data = req.body;
            console.log("🚀 ~ returnasync ~ courseId:", courseId)


            const updatedStatus = await updateCourseStatusUseCase(dependencies).execute(courseId,req.body)

            if(!updatedStatus){
                throw new Error("status not updated")
            }

            courseStatusProducer(updatedStatus,"payment-service-topic");
            courseStatusProducer(updatedStatus,"notification-service-topic");
            res.status(200).json({success:true,data:updatedStatus,message:"status updated succesfully"})

        }catch(error){
            next(error)
        }
    }
}