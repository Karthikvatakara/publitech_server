import { IDependencies } from "../interfaces/IDependency";

export const getCompleteCourses = (dependencies:IDependencies) => {
    const { repositories: { getCompleteCourses }} = dependencies;
    return {
        execute: async(page: number, limit: number, search: string, filter: string, sort: string) => {
            try{
                return await getCompleteCourses(page, limit, search, filter, sort );
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}