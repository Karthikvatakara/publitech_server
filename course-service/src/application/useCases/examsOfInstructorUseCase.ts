import { IDependencies } from "../interfaces/IDependency";

export const examsOfInstructorUseCase = ( dependencies: IDependencies) => {
    const { repositories: { examsOfInstructor }} = dependencies;

    return {
        execute: async( instructorId: string) => {
            try{
                return await examsOfInstructor(instructorId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}