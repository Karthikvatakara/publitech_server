import { CourseEntity } from "../../../../domain/entities";
import { course } from "../models";
import { Types } from "mongoose";

export const updateCourse = async(courseId:string,data:CourseEntity):Promise<CourseEntity | null> => {
    try{
        const id = new Types.ObjectId(courseId);
        
        const updated = await course.findByIdAndUpdate(id,data,{new:true});
        console.log("🚀 ~ updateCourse ~ updated:", updated)

        if(!updated){
            throw new Error("data is not updated succesfully")
        }
        return updated
    }catch(error){
        throw new Error((error as Error)?.message || "error occurd in updaetcourse repo")
    }
}