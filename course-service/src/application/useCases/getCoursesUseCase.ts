import { IDependencies } from "../interfaces/IDependency";

export const getCourseUseCase = (dependencies:IDependencies) => {
        const {repositories: { getAllCourse }} = dependencies
    return {
        execute: async(id:string) => {
            try{
                return await getAllCourse(id)
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}