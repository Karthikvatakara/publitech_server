import { IDependencies } from "../../application/interfaces/IDependency";
import { Request,Response,NextFunction} from "express";
import instructorApprovalProducer from "../../infrastructure/kafka/producers/instructorApprovalProducer";
import instructorNotificationProducer from "../../infrastructure/kafka/producers/instructorNotificationProducer";

export const approveInstructorController = (dependecies:IDependencies) => {
    const {useCases: { approveInstructorUseCase }} = dependecies;

    return async(req:Request,res:Response,next:NextFunction) => {
        let { instructorId,reason } = req.body
        console.log("🚀 ~ returnasync ~ req.body:", req.body)
        try{
            
            if(!instructorId){
                throw new Error("instructor id is not provided")
                }
                
            if(!reason) reason = "null";
            const approvedInstructor = await approveInstructorUseCase(dependecies).execute(instructorId ,reason);

            if(!approvedInstructor){
                throw new Error("the instructor status is not updated")
            }
            
            // sending edited document to auth service
            instructorNotificationProducer({instructor:approvedInstructor,reason},"notification-service-topic")

            // sending data to corresponding services
             instructorApprovalProducer(approvedInstructor,"auth-service-topic")
             instructorApprovalProducer(approvedInstructor,"course-service-topic");

            res.status(200).json({success:true,data:approvedInstructor,message:"instuctor approved"})
        }catch(error){
            console.error("error in controlllers",error)
            next(error);
        }
    }
}