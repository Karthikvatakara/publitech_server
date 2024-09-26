import { CourseEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependency";

export const updateCourseUseCase = (dependencies:IDependencies) => {
    const { repositories: { updateCourse }} = dependencies;

    return {
        execute: async(courseId:string,data:CourseEntity) => {
            console.log("🚀 ~ execute:async ~ data:usecase", data)
            // console.log("🚀 ~ execute:async ~ courseId:usecase", courseId)
            try{
                return await updateCourse(courseId,data)
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}