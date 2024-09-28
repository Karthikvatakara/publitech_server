import { ObjectId } from "mongoose";
import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const studentEnrolledCoursesUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { studentEnrolledCourses }} = dependencies;

    return{
        execute: async( userId: string | ObjectId ) => {
            try{
                return await studentEnrolledCourses(userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}