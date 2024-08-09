import { CourseEntity } from "../../../../domain/entities";
import { course } from "../models";

export const getCourse = async(id:string):Promise<CourseEntity | null> => {
    try{
        const selectedCourse = await course.findById(id).
        populate("instructorRef","username").
        populate("categoryRef","title");

        if(!selectedCourse){
            throw new Error("selected course is invalid")
        }

        return selectedCourse;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}