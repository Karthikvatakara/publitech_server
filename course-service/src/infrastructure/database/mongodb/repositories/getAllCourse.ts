import { CourseEntity } from "../../../../domain/entities";
import { course } from "../models";
import { Types } from "mongoose";

export const getAllCourse = async(id:string):Promise<CourseEntity[] | null> => {
    try{
        console.log(id);
        
        const courseData = await course.find({instructorRef:new Types.ObjectId(id)})
        // console.log("🚀 ~ getAllCourse ~ courseData:", courseData,"in repository")
        
        return courseData;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}