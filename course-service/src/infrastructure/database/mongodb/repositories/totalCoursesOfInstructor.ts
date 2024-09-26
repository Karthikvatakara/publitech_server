import { course } from "../models"

export const totalCoursesOfInstructor = async(userId: string) => {
    try{
        const totalCourses = await course.countDocuments({ instructorRef: userId});
        return totalCourses;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}