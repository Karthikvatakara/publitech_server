import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const studentEnrolledCoursesUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { studentEnrolledCourses }} = dependencies;

    return{
        execute: async( userId: string ) => {
            try{
                return await studentEnrolledCourses(userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}