import { CourseEntity } from "../../../../domain/entities"
import { course } from "../models"

export const createCourse = async(data:CourseEntity): Promise<CourseEntity | null>=>{
    try {
        console.log("🚀 ~ createCourse ~ data:;;;;;;;;;;;;;;;;;;;;;;", data)
        console.log("reached in repository");
        
        const createdCourse = await course.create(data);
        console.log("🚀 ~ createCourse ~ createdCourse:", createdCourse)
        
        return createdCourse as CourseEntity
    } catch (error) {
        throw new Error((error as Error)?.message)
    }
}