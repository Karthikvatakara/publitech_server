import { IDependencies } from "../interfaces/IDependency";

export const categoryEnrollmentDistributionUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { categoryEnrollmentDistribution }} = dependencies;

    return{
        execute:async() => {
           try{
            return await categoryEnrollmentDistribution();
           }catch(error){
            throw new Error((error as Error)?.message)
           } 
        }
    }
}