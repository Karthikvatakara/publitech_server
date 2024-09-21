import { IDependencies } from "../interfaces/IDependency";

export const totalCoursesOfInstructorUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { totalCoursesOfInstructor }} = dependencies;

    return{
        execute: async( userId: string ) => {
            try{
                return await totalCoursesOfInstructor(userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}   