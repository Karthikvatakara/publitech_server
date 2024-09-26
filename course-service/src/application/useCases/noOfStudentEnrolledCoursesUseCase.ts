import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const noOfStudentEnrolledCoursesUseCase = ( dependencies: IDependencies )=> {
    const{ repositories: { noOfStudentEnrolledCourses }} = dependencies;

    return {
        execute: async(userId: string ) => {
            try{
                return await noOfStudentEnrolledCourses(userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}