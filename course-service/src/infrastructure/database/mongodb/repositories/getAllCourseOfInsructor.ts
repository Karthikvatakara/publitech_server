import { Types } from "mongoose"
import { CourseEntity } from "../../../../domain/entities"
import { course } from "../models"

export const getAllCourseOfInstructor = async( id:string, page: number, limit: number, search: string,  stage: string) : Promise<{ courses: CourseEntity[] , totalPages: number, currentPage: number } | null> => {

   try{
    const query: any = { instructorRef: id } ; 
    if(search) {
        query.title = { $regex: search, $options: 'i'} ;
    }

    if(stage) {
        query.stage = stage;
    }


    const totalCourses = await course.countDocuments(query);
    const totalPages = Math.ceil( totalCourses / limit );

    const courseData = await course.find(query)
    .skip(( page-1) * limit)
    .limit(limit);

    return { courses: courseData, totalPages, currentPage: page}

   }catch(error){
    throw new Error((error as Error)?.message)
   }
}