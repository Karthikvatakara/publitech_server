import { CourseEntity } from "../../../domain/entities/courseEntity";
import { createCourse } from "../../database/mongoDb/repositories/createCourse";

export default async ( data: CourseEntity ) => {
    try{
        createCourse(data)
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}