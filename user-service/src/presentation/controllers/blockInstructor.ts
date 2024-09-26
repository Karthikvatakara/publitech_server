import { IDependencies } from "../../application/interfaces/IDependency";
import { Request,Response,NextFunction } from "express";
import instructorStatusChange from "../../infrastructure/kafka/producers/instructorStatusChange";

export const blockInstructorController = (dependecies:IDependencies) => {
    const { useCases: { blockInstructorUseCase }} = dependecies;

    return async(req:Request,res:Response,next:NextFunction) => {
        const { id,action } = req.body;
        console.log("🚀 ~ returnasync ~ id:", id)
        try{

            if(!id || !action ){
                throw new Error("id or action is not provided")
            }
            const updated = await blockInstructorUseCase(dependecies).execute(id,action)

            if(!updated){
                throw new Error("instructor status is not activated")
            }

            console.log("🚀 ~ returnasync ~ updated:", updated)
            
            // sending data to  services
            instructorStatusChange(updated,"auth-service-topic")
            instructorStatusChange(updated,"course-service-topic")

            res.status(200).json({success:true,data:updated,message:"instructor status updated"})
        }catch(error){
            console.error(error,"error ocuured in blockinstructor usecase")
            next(error)
        }
    }
}