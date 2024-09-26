import { subscriptionPaymentEntity } from "../entities/subscriptionPaymentEntity";

export interface ISubscriptionPaymentUseCase {
    execute:(data: subscriptionPaymentEntity) => Promise<subscriptionPaymentEntity | null>
}