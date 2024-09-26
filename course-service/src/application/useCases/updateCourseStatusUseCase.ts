import { CourseEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependency";

export const updateCourseStatusUseCase = (dependencies:IDependencies) => {
    const { repositories:{ updateCourseStatus }} = dependencies;

    return {
        execute: async(courseId:string,data:CourseEntity) => {
            try{
                console.log("11111111111111")
                return await updateCourseStatus(courseId,data);
            }catch(error) {
                throw new Error((error as Error)?.message)
            }
        }
    }
}