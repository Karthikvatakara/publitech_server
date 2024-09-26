import { IDepencencies } from "../interfaces/IDependency";

export const getTotalRevenueUseCase = ( dependencies: IDepencencies) =>{
    const { repositories: { getTotalRevenue }} = dependencies;

    return {
        execute: async() => {
            try{
                return await getTotalRevenue();
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}