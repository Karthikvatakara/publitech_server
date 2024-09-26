import { CourseEntity } from "../../../../domain/entities";
import { course } from "../models";

export const getAllCoursesExamCreation = async( instructorRef:string ): Promise<CourseEntity[] | null> => {
    try{
        const allCourses = await course.find({instructorRef, isBlocked: false, stage: "accepted"});

        return allCourses;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}