import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const getAllCourseOfInsructorUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { getAllCourseOfInstructor }} = dependencies;

    return {
        execute: async ( 
            id: string, 
            page: number,
            limit: number,
            search: string,
            stage: string,

        ) => {
            try{
                return await getAllCourseOfInstructor( id, page, limit, search, stage)
            } catch(error){
                throw new Error((error as Error)?. message)
            }
        }
    }
}