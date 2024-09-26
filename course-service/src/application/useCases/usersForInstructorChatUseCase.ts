import { IDependencies } from "../interfaces/IDependency";

export const usersForInstructorChatUseCase = (dependencies : IDependencies) => {
    const { repositories: { usersForInstructorChat }} = dependencies;

    return {
        execute: async( instructorId: string ) => {
            try{
                return await usersForInstructorChat(instructorId);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}