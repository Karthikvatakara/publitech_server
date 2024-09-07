import { CourseEntity } from "../../../../domain/entities/courseEntity";
import { course } from "../models/course";

export const createCourse = async( data: CourseEntity ) : Promise<CourseEntity | null > => {
    try{
        const createdCourse = await course.findByIdAndUpdate(
            data._id, 
            { $set: data }, 
            { new: true, upsert: true, runValidators: true }
        )

        if(!createdCourse){
            throw new Error("course not created");
        }
        return createdCourse;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}