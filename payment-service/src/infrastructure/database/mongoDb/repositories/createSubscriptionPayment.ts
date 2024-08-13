import { subscriptionPayment } from "../models/subscriptionPayment";
import { subscriptionPaymentEntity } from "../../../../domain/entities/subscriptionPaymentEntity";

export const createSubscriptionPayment = async( data: subscriptionPaymentEntity): Promise<subscriptionPaymentEntity | null> => {
    try{
        const createdSubscription = await subscriptionPayment.create(data);

        return createdSubscription;  
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}