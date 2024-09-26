import { IDependencies } from "../interfaces/IDependency";

export const getSingleCourseUseCase = (dependencies:IDependencies) => {
    const { repositories: { getCourse }} = dependencies;

    return {
        execute: async(id:string) => {
            try{
                return await getCourse(id);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}