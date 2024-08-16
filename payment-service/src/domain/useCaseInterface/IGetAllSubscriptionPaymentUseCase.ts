import { subscriptionPaymentEntity } from "../entities/subscriptionPaymentEntity";

export interface IGetAllSubscriptionPaymentUseCase {
    execute:() => Promise<subscriptionPaymentEntity[] | null>
}