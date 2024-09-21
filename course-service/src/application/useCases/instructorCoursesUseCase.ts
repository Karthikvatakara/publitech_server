import { IDependencies } from "../interfaces/IDependency";

export const instructorCoursesUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { instructorCourses }} = dependencies;

    return{
        execute: async(instructorId: string) => {
            try{
                return await instructorCourses(instructorId);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}