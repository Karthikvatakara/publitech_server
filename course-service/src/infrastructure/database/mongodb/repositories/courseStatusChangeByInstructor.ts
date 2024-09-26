import { CourseEntity } from "../../../../domain/entities";
import { course } from "../models";

export const courseStatusChangeByInstructor = async( id: string,status: "block" | "unblock"): Promise<CourseEntity | null> => {
    try{

        const isBlocked = status == "block";
        
        const updatedCourse = await course.findByIdAndUpdate(id,{
            isBlockedInstructor: isBlocked
        },{ new:true })

        return updatedCourse;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}