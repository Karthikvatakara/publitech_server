import { course } from "../models";

export const instructorCourses = async( instructorId: string ) => {
    try{
        const courses = await course.find({instructorRef: instructorId}).sort({createdAt:-1}).limit(3)

        return courses;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}