import { IDependencies } from "../../../../application/interfaces/IDependency";
import { course } from "../models";
import { CourseEntity } from "../../../../domain/entities";

export const topEnrollments = async(): Promise<CourseEntity[] | null> => {
    try{
        const topCourses = await course.find().sort({ noOfPurchases: -1}).limit(5);

        return topCourses;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}