import { IDependencies } from "../interfaces/IDependency";
import { CourseEntity } from "../../domain/entities";

export const createCourseUseCase = (dependencies:IDependencies) => {
    const {repositories:{ createCourse }} = dependencies;

    return {
        execute: async(data:CourseEntity) => {
            try{
                console.log("reached in usecase")
                return await createCourse(data)
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}