import { IDepencencies } from "../interfaces/IDependency";

export const getTotalPaymentsForInstructorUseCase = ( dependencies: IDepencencies ) => {
    const { repositories: { getTotalPaymentsForInstructor }} = dependencies;

    return{
        execute: async(instructorId: string ) => {
            try{
                return await getTotalPaymentsForInstructor(instructorId);
            }catch(error){  
                throw new Error((error as Error)?.message);
            }
        }
    }
}