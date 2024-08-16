import { IDepencencies } from "../interfaces/IDependency";

export const getAllSubscriptionPaymentUseCase = ( dependencies: IDepencencies) => {
            const { repositories: { getAllSubscriptionPayment }} = dependencies;
    return {
        execute: async() => {
            try{
                return await getAllSubscriptionPayment();
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}