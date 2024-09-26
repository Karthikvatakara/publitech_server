import { IDependencies } from "../interfaces/IDependency";

export const noOfStudentsPurchasedUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { noOfStudentsPurchased } } = dependencies;

    return{
        execute:async(instructorId: string) => {
            try{
                return await noOfStudentsPurchased(instructorId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}