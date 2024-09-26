import { IDepencencies } from "../interfaces/IDependency";

export const getTotalPaymentsUseCase = ( dependencies: IDepencencies) => {
            const { repositories: { getTotalPayments }} = dependencies;
    return {
        execute: async() => {
            try{
                return await getTotalPayments();
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}