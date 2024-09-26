import { IDependencies } from "../interfaces/IDepencencies";

export const findInstructorByIdUseCase = ( dependencies: IDependencies ) => {
        const { repositories: { findInstructorById }} =  dependencies
    return {
        execute:async(instructorId: string ) => {
            console.log("🚀 ~ execute:async ~ instructorId:usecases", instructorId)
            try{    
                return await findInstructorById(instructorId);
            }catch(error){
                throw new Error((error as Error)?.message)
            }

        }
    }
}