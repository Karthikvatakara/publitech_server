import { IDepencencies } from "../interfaces/IDependency";

export const getAllSubscriptionPaymentUseCase = ( dependencies: IDepencencies) => {
            const { repositories: { getAllSubscriptionPayment }} = dependencies;
    return {
        execute: async( page: number, limit: number, status: string, search: string ) => {
            try{
                return await getAllSubscriptionPayment( page, limit, status, search);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}