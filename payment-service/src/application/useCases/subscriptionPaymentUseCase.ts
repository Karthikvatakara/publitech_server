import { subscriptionPaymentEntity } from "../../domain/entities/subscriptionPaymentEntity";
import { IDepencencies } from "../interfaces/IDependency";

export const subscriptionPaymentUseCase = ( dependencies: IDepencencies ) => {
        const { repositories:{ createSubscriptionPayment }} = dependencies;

        return {
            execute:async( data:subscriptionPaymentEntity) => {
                try{
                    return await createSubscriptionPayment(data);
                }catch(error){
                    throw new Error((error as Error)?.message);
                }
            }
        }
}