import { CourseEntity } from "../../../../domain/entities";
import { course } from "../models"

export const updateCourseStatus = async(courseId:string,data:CourseEntity) => {
    try{
        console.log("repossssssssssss")
        const statusUpdate = await course.findByIdAndUpdate(courseId,data,{new: true})

        if(!statusUpdate){
            throw new Error("status not updated")
        }

        return statusUpdate;
        
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}

