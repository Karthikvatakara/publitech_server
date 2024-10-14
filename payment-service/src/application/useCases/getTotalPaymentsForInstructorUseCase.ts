import { IDepencencies } from "../interfaces/IDependency";

export const getTotalPaymentsForInstructorUseCase = ( dependencies: IDepencencies ) => {
    const { repositories: { getTotalPaymentsForInstructor }} = dependencies;

    return{
        execute: async(instructorId: string ) => {
            console.log("🚀 ~ execute:async ~ instructorId: in the usecase", instructorId)
            try{
                return await getTotalPaymentsForInstructor(instructorId);
            }catch(error){  
                throw new Error((error as Error)?.message);
            }
        }
    }
}